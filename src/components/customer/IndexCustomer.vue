<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <!-- <h1 class="m-0">Data Karyawan </h1> -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary card-outline">
                                <div class="card-body">
                                    <h4 style="float: right;" class="m-0">Data Customer </h4>
                                    <router-link class="btn btn-info mb-2" to="/tambah/Customers">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style="width: 10px">No</th>
                                                <th>ID</th>
                                                <th>Nama</th>
                                                <th>Alamat</th>
                                                <th>Email</th>
                                                <th>No. Tlp</th>
                                                <th>Username</th>
                                                <!-- <th>Password</th> -->
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(s, index) in pelanggan" :key="s.idPelanggan">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ s.idPelanggan }}</td>
                                                <td>{{ s.nama }}</td>
                                                <td>{{ s.alamat }}</td>
                                                <td>{{ s.email }}</td>
                                                <td>{{ s.noTelpon }}</td>
                                                <td>{{ s.username }}</td>
                                                <!-- <td>{{ s.password }}</td> -->
                                                <td>
                                                    <div class="btn-group">
                                                        <router-link class="btn btn-info text-light" :to="{ path: '/customer/EditCustomer/' + s.idPelanggan }">Edit</router-link>
                                                         <button type="button" @click="hapusData(s.idPelanggan)" class="btn btn-danger">Hapus</button>                                                        
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

// import Vue from 'vue';
import axios from 'axios';

// Vue.use(axios);
export default {
    data() {
        return {
            pelanggan: {}
        }
    },
    created() {
        this.userLoad();
    },
    methods:
    {
        userLoad()
        {
            axios.get('http://localhost:8000/api/getPelanggan')
            .then(({ data }) =>
            {
                this.pelanggan = data;
            });

        },
        hapusData(idPelanggan)
        {
            var url = `http://localhost:8000/api/hapusPelanggan/`+ idPelanggan;
            axios.delete(url)
            alert("Sukses delete karyawan");
            location.reload()               
        }  
    },
    
}
</script>
