<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">            
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Data Tiket</h1>
                        </div>          
                    </div>
                </div>
            </div>
 
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-info card-outline">
                                <div class="card-body">
                                    <h4 style="float: right;" class="m-0">Data Customer </h4>
                                    <router-link class="btn btn-info mb-2" to="/tambah">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                            <th class="text-center" style="width: 10px">NO.</th>
                                            <th class="text-center">ID Tiket</th>
                                            <th class="text-center">Nama Tiket</th>
                                            <th class="text-center">Kategori</th>
                                            <th class="text-center">Harga</th>
                                            <th class="text-center">Tempat</th>
                                            <th class="text-center">Kick-Off</th>
                                            <th class="text-center">Tanggal</th>
                                            <th class="text-center">Stok</th>
                                            <th class="text-center">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(s, index) in tiket" :key="s.id">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ s.id }}</td>
                                                <td>{{ s.namaTiket }}</td>
                                                <td>{{ s.jenisTiket }}</td>
                                                <td>{{ s.harga }}</td>
                                                <td>{{ s.tempat }}</td>
                                                <td>{{ s.waktuPertandingan }}</td>
                                                <td>{{ s.tgl }}</td>
                                                <td>{{ s.stok }}</td>
                                                <td>
                                                    <div class="btn-group">
                                                         <router-link class="btn btn-info text-light" :to="{ path: '/tiket/EditTicket/' + s.id }">Edit</router-link>
                                                        <button type="button" @click="hapus(s.id)" class="btn btn-danger">Hapus</button>                                                      
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
            tiket : {}
        }
    },
    created() {
       this.DataTiket();

    },
    methods: {
        
        DataTiket() {
            axios.get('http://localhost:8000/api/getTiket')
            .then(
                ({ data }) => {
                    this.tiket = data;
                }
            );

        },
            hapus(id) {
            axios.delete(`http://localhost:8000/api/hapusTiket/`+ id)
            alert("Sukses delete tiket");
            location.reload()               
        }  
    }
}
</script>