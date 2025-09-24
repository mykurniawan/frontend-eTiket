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
                                    <h3 class="card-title">Edit Tiket</h3>
                                </div>
                                <form @submit.prevent="edit">
                                    <input type="hidden" v-model="id">
                                    <div class="card-body">
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Pertandingan</label>
                                                <input type="text" class="form-control" v-model="namaTiket">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Kategori</label>
                                                <!-- <input type="text" class="form-control" v-model="jenisTiket"> -->
                                                <select class="form-control" id="inputRight" v-model="jenisTiket">
                                                    <option value="Ekonomi">Ekonomi</option>
                                                    <option value="VIP">VIP</option>
                                                </select>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Harga</label>
                                                <input type="text" class="form-control" v-model="harga">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Tempat</label>
                                                <input type="text" class="form-control" v-model="tempat">
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Waktu Pertandingan</label>
                                                <input type="time" class="form-control" v-model="waktuPertandingan">
                                            </div>
                                            </div>
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputRight">Tanggal</label>
                                                <input type="date" class="form-control" v-model="tgl">
                                            </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="inputLeft">Stok Tiket</label>
                                                <input type="text" class="form-control" v-model="stok">
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
// import Vue from 'vue';

// Vue.use(axios);

export default {
    data() {
        return {
            tiket : [],
            id : "",
            namaTiket:'',
            jenisTiket:'',
            harga:'',
            tempat:'',
            waktuPertandingan:'',
            tgl:'',
            stok:'',
        }
    },
    created() {  
        this.DataTiket(),
        this.getdetail(this.$route.params.id)
        this.editdata()
    },
    methods : {
        DataTiket(){
            axios.get('http://127.0.0.1:8000/api/getTiket')
            .then(
                ({data}) => {
                    this.tiket = data;
                }
            );
        },
        getdetail(id){
            axios.get('http://127.0.0.1:8000/api/getIdTiket/' + id)
            .then((response) => {
                console.log(response.data[0])
                this.id = response.data[0].id
                this.namaTiket = response.data[0].namaTiket
                this.jenisTiket = response.data[0].jenisTiket
                this.harga = response.data[0].harga
                this.tempat = response.data[0].tempat
                this.waktuPertandingan = response.data[0].waktuPertandingan
                this.tgl = response.data[0].tgl
                this.stok = response.data[0].stok
               
            })
        },
        edit : function (){
            let DataMenu= {
                id : this.id,
                namaTiket : this.namaTiket,
                jenisTiket : this.jenisTiket,
                harga : this.harga,
                tempat : this.tempat,
                // tempat : this.tempat,
                waktuPertandingan : this.waktuPertandingan,
                tgl : this.tgl,
                stok : this.stok,
            }
            axios.put("http://127.0.0.1:8000/api/editTiket/" + this.id , DataMenu)
            .then(
                ({data}) => {
                    alert("Berhasil update Tiket");
                    this.$router.push('/tiket');
                    this.tiket = data;
                }
            )
        },
    }
}

</script>
