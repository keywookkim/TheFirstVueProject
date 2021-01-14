<template>
<div>
    <table id="axios-table">
        <thead>
            <tr class="header-box">
                <th>상품번호</th>
                <th>상품명</th>
                <th>상품가격</th>
            </tr>
        </thead>
        <tbody>
            <tr class='product-box' v-for="item in items" :key="item.key">
                <td class="firstitem">{{item.no}}</td>
                <td class="seconditem">{{item.productName}}</td>
                <td class="thirditem">{{item.price}}</td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
const axios = require('axios');

export default {
    data() {
        return{
            items : ''
        }
    },
    created: async function getItems() {
        try {
            const response = await axios.get('src/data.json');
            this.items = response.data.items;
        } 
        catch (error) {
            console.error(error);
        }
    }
}
</script>

<style lang='scss' scoped>
    #axios-table {
        width: 30%;
        height: 30%;
        border: 2px solid #444;
        border-collapse: collapse;
        text-align: center;
        margin : auto;
        float : left;
        
        thead tr {
            th {
                border: 2px solid #444;  
            }
        }

        tbody tr{
            td {
                border: 2px solid #444; 
            }
            &:nth-child(2n+1) {
            background-color: gainsboro;
            }
        }
    }
</style>