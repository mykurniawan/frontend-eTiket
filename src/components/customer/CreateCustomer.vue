<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Form Tambah Karyawan</h1>
                        </div>          
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card card-info">
                                <div class="card-header">
                                    <h3 class="card-title">Data Customers</h3>
                                </div>
                                <form @submit.prevent="tambah">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Nama</label>
                                                <input type="text" class="form-control" v-model="pelanggan.nama">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Alamat</label>
                                                <input type="text" class="form-control" v-model="pelanggan.alamat">
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Email</label>
                                                <input type="text" class="form-control" v-model="pelanggan.email">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">No. Telpon</label>
                                                <input type="text" class="form-control" v-model="pelanggan.noTelpon">
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Username</label>
                                                <input type="text" class="form-control" v-model="pelanggan.username">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Password</label>
                                                <input type="password" class="form-control" v-model="pelanggan.password">
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Simpan</button>
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
// import Vue from 'vue';

// Vue.use(axios);

export default {
    data() {
        return {
            pelanggan : {}
        }
    },
     created(){
        this.tambah_pelanggan();
     },
     methods : 
     {
        tambah(){  
            this.tambah_data();
        },
        tambah_data()
        {    
            axios.post('http://localhost:8000/api/tambahPelanggan', this.pelanggan)
            .then(({data})=>
            {
                alert("Berhasil Tambah Customer");``
                this.$router.push('/customer');
                this.pelanggan = data;
            })
        }
    }
}
</script>
