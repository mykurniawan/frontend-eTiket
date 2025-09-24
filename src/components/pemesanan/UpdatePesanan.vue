<template>
    <div>
        <navbar-component></navbar-component>
        <sidebar-component></sidebar-component>
        <div class="content-wrapper">
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0">Status</h1>
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
                                    <h3 class="card-title">Edit</h3>
                                </div>
                                <form @submit.prevent="edit">
                                    <input type="hidden" v-model="diPesanan">
                                    <div class="card-body">                                        
                                        <div class="form-group">
                                            <label>Jenis </label>
                                                <select class="form-control" id="inputRight" v-model="statusPembayaran">
                                                    <option value="Diterima">Diterima</option>
                                                    <option value="Belum Diterima">Belum</option>
                                                </select>
                                            <!-- <input type="text" class="form-control" v-model="statusPembayaran"> -->
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
// import Vue from 'vue';

// Vue.use(axios);

export default {
    data() {
        return {
            // pelanggan :[],
            pesanan : [],
            idPesanan : '',
            // idPelanggan:'',
            statusPembayaran:'',
        }
    },
    created() {  
    //    this.DataPelanggan();
        this.DataMenu(),
        this.getdetail(this.$route.params.idPesanan)
        // this.editdata()
    },
    methods : {

        DataMenu(){
            axios.get('http://127.0.0.1:8000/api/getpesanan')
            .then(
                ({data}) => {
                    this.pesanan = data;
                }
            );
        },
        getdetail(idPesanan){
            axios.get('http://127.0.0.1:8000/api/getidpesanan/' + idPesanan)
            .then((response) => {
                console.log(response.data[0])
                this.idPesanan = response.data[0].idPesanan
                // this.idPelanggan = response.data[0].idPelanggan
                this.statusPembayaran = response.data[0].statusPembayaran
               
            })
        },
        edit : function (){
            let DataMenu= {
                idPesanan : this.idPesanan,
                statusPembayaran : this.statusPembayaran,
                // idPelanggan : this.idPelanggan,
            }
            axios.put("http://127.0.0.1:8000/api/editstatusbayar/" + this.idPesanan , DataMenu)
            .then(
                ({data}) => {
                    alert("Status Pembayaran Terupdate");
                    this.$router.push('/pemesanan');
                    this.idPesanan = data;
                }
            )
        },
    }
}
</script>
