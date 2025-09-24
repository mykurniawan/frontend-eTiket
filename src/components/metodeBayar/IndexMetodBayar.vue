<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <!-- <h1 class="m-0">Metode Bayar </h1> -->
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
                                    <h4 style="float: right;" class="m-0">Metode Bayar </h4>
                                    <router-link class="btn btn-info mb-2" to="/tambah/metodebayar">
                                        <i class="fas fa-plus"></i> Tambah
                                    </router-link>
                                    <table class="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th style="width: 10px">No</th>
                                                <th>ID</th>
                                                <th>Jenis</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(s, index) in metodebayar" :key="s.idMetodeBayar">
                                                <td>{{ index + 1 }}</td>
                                                <td>{{ s.idMetodeBayar }}</td>
                                                <td>{{ s.jenis }}</td>
                                                <td>
                                                    <div class="btn-group">
                                                         <router-link class="btn btn-info text-light" :to="{ path: '/metodeBayar/EditMetodBayar/' + s.idMetodeBayar }">Edit</router-link>
                                                         <button type="button" @click="hapusData(s.idMetodeBayar)" class="btn btn-danger">Hapus</button>                                                        
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
            metodebayar: {}
        }
    },
    created() {
        this.userLoad();
    },
    methods:
    {
        userLoad()
        {
            axios.get('http://localhost:8000/api/getmetodebayar')
            .then(({ data }) =>
            {
                this.metodebayar = data;
            });

        },
        hapusData(idMetodeBayar)
        {
            var url = `http://localhost:8000/api/hapusmetodebayar/`+ idMetodeBayar;
            axios.delete(url)
            alert("Sukses hapus");
            location.reload()               
        }  
    },
    
}
</script>
