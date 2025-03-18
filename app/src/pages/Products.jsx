import GlobalLayout from "../layouts/GlobalLayout";
import React from "react";
import { Divider, Box, Dialog, DialogContent, Fab, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';

const Products = () => {

    const [showAddProduct, setShowAddProduct] = React.useState(false);
    const [products, setProducts] = React.useState([
        {
            id: "1",
            name: "Helkama naistenpyörä",
            price: "250"
        },
        {
            id: "2",
            name: "Insera maastopyörä",
            price: "270"
        },
        {
            id: "3",
            name: "Tunturi kilpapyörä",
            price: "310"
        },
    ]);

    const editProductInfo = (event, index, type) => {
        let value = event.target.value;
        let updatedProducts = [...products];

        if(type === "nimi") {
            updatedProducts[index].name = value;
        }

        if(type === "hinta" && !isNaN(event.target.value)) {
            updatedProducts[index].price = Number(value);
        }

        setProducts(updatedProducts);
    }

    const saveProduct = (index) => {
        console.log("Pitäisi lisätä tuote: " + index);
    }
    const deleteProduct = (id) => {
        let updatedProducts = products.filter(product => product.id !== id);
        console.table(updatedProducts);
        setProducts(updatedProducts);
    }

    const addProduct = () => {
        console.log(`Uuden tuotteen nimi: ${nameRef.current.value}`);
        console.log(`Uuden tuotteen hinta: ${priceRef.current.value}`);

        if (!isNaN(priceRef.current.value)) {
        let newProduct = {
            id: products.length + 1,
            name: nameRef.current.value,
            price: Number(priceRef.current.value,)
        };

        setProducts([...products, newProduct]);
        setShowAddProduct(false);
    }
    }

    const nameRef = React.useRef();
    const priceRef = React.useRef();


    return(
        <GlobalLayout title="Hallitse">
            <Grid container spacing={2} mt={5}>
            {products.map((product, index) =>
                <Grid key={product.id} size={{xs: 12, sm: 6, md: 4, xl: 3}}>
                    <Paper elevation={5} sx={{padding: 2}}>
                        <TextField label="Tuotenimi" value={product.name} fullWidth onChange={event => editProductInfo(event, index, "nimi")} />
                        <EmptyLine />
                        <Stack direction="row">
                            <TextField label="Hinta" value={product.price} fullWidth  onChange={event => editProductInfo(event, index, "hinta")} />
                                <Box sx={{width: "100%", alignContent: "center", textAlign: "right"}}>
                                    <IconButton color="success" onClick={() => saveProduct(index)}>
                                        <SaveIcon />
                                    </IconButton>
                                    <IconButton color="error" onClick={() => deleteProduct (product.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Box>
                         </Stack>
                    </Paper>
                </Grid>
            )}

            <Dialog open={showAddProduct}>
                <DialogContent>
                    <Typography color="success"><b>Lisää Tuote</b></Typography>
                    <Divider />
                    <EmptyLine />
                    <TextField inputRef={nameRef} label="Tuotenimi" fullWidth />
                    <EmptyLine />
                    <TextField inputRef={priceRef} label="Hinta" />
                    <Box sx={{width: "100%", alignContent: "center", textAlign: "right"}}>
                            <IconButton color="success" onClick={() => addProduct()}>
                                <SaveIcon />
                            </IconButton>
                            <IconButton color="error" onClick={() => setShowAddProduct (false)}>
                                 <DeleteIcon />
                            </IconButton>
                    </Box>
                </DialogContent>
            </Dialog>


            <Fab color="success" sx={{bottom: 40, right: 40, position: "fixed"}} onClick={() => setShowAddProduct(true)}>
                <AddIcon />
            </Fab>
            </Grid>
        </GlobalLayout>
    )
}

export default Products;

const EmptyLine = () => {
    return <div style={{ height: "2vh" }} />
};