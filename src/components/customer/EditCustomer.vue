<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Form Edit Customer</h1>
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="card card-info">
                                <div class="card-header">
                                    <h3 class="card-title">Edit</h3>
                                </div>
                                <form @submit.prevent="edit">
                                    <input type="hidden" v-model="idPelanggan">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Nama</label>
                                                <input type="text" class="form-control" v-model="nama">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Alamat</label>
                                                <input type="text" class="form-control" v-model="alamat">
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Email</label>
                                                <input type="text" class="form-control" v-model="email">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">No. Telpon</label>
                                                <input type="text" class="form-control" v-model="noTelpon">
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Username</label>
                                                <input type="text" class="form-control" v-model="username">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Password</label>
                                                <input type="text" class="form-control" v-model="password">
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                               
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary" >Simpan</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            pelanggan : [],
            idPelanggan : "",
            nama:'',
            alamat:'',
            email:'',
            noTelpon:'',
            username:'',
            password:'',
        }
    },
    created() {  
        this.DataMenu(),
        this.getdetail(this.$route.params.idPelanggan)
        this.editdata()
    },
    methods : {
        DataMenu(){
            axios.get('http://127.0.0.1:8000/api/getPelanggan')
            .then(
                ({data}) => {
                    this.pelanggan = data;
                }
            );
        },
        getdetail(idPelanggan){
            axios.get('http://127.0.0.1:8000/api/getIdPelanggan/' + idPelanggan)
            .then((response) => {
                console.log(response.data[0])
                this.idPelanggan = response.data[0].idPelanggan
                this.nama = response.data[0].nama
                this.alamat = response.data[0].alamat
                this.email = response.data[0].email
                this.noTelpon = response.data[0].noTelpon
                this.username = response.data[0].username
                this.password = response.data[0].password
               
            })
        },
        edit : function (){
            let DataMenu= {
                idPelanggan : this.idPelanggan,
                nama : this.nama,
                alamat : this.alamat,
                email : this.email,
                noTelpon : this.noTelpon,
                username : this.username,
                password : this.password,
            }
            axios.put("http://127.0.0.1:8000/api/editDataPelanggan/" + this.idPelanggan , DataMenu)
            .then(
                ({data}) => {
                    alert("Berhasil update data");
                    this.$router.push('/customer');
                    this.pelanggan = data;
                }
            )
        },
    }
}

</script>
