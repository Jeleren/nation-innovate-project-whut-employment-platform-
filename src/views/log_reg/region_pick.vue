<template>
  <div class="pick">
    <div class="pick-wrap">
      <div class="pick-title">省份</div>
      <div class="pick-list">
        <div v-for="(item, index) of region" class="pick-item pointer" :class="{'pick-color':index === province_index}" :key="index" @click.stop="setCity(index)">{{item.regionName}}</div>
      </div>
    </div>
    <div class="pick-wrap" v-if="city.length">
      <div class="pick-title">城市</div>
      <div class="pick-list">
        <div v-for="(item, index) of city" class="pick-item pointer" :key="index" @click.stop="pickCity(item)">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'region_pick',
  data () {
    return {
      province_index: -1,
      city: [],
      region: [
        {
          regionName: '北京'
        },
        {
          regionName: '天津'
        },
        {
          regionName: '上海'
        },
        {
          regionName: '重庆'
        },
        {
          regionName: '湖北',
          city: ['武汉', '黄石', '十堰', '宜昌', '襄阳', '鄂州', '荆门', '孝感', '荆州', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '潜江', '神农架林区']
        },
        {
          regionName: '河北',
          city: ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水']
        },
        {
          regionName: '山西',
          city: ['大同', '朔州', '忻州', '阳泉', '吕梁', '晋中', '长治', '晋城', '临汾', '晋城']
        },
        {
          regionName: '辽宁',
          city: ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛']
        },
        {
          regionName: '吉林',
          city: ['长春', '吉林', '四平', '辽源', '通化', '白山', '白城', '松原', '延边朝鲜族自治州']
        },
        {
          regionName: '黑龙江',
          city: ['哈尔滨', '齐齐哈尔', '牡丹江', '佳木斯', '大庆', '鸡西', '双鸭山', '伊春', '七台河', '鹤岗', '黑河', '绥化', '大兴安岭地区']
        },
        {
          regionName: '江苏',
          city: ['南京', '无锡', '徐州', '常州', '苏州', '南通', '连云港', '淮安', '盐城', '扬州', '镇江', '泰州', '宿迁']
        },
        {
          regionName: '浙江',
          city: ['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华', '衢州', '台州', '丽水', '舟山']
        },
        {
          regionName: '安徽',
          city: ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '阜阳', '宿州', '滁州', '六安', '宣城', '池州', '亳州']
        },
        {
          regionName: '福建',
          city: ['福州', '厦门', '漳州', '泉州', '三明', '莆田', '南平', '龙岩', '宁德', '平潭综合试验区']
        },
        {
          regionName: '江西',
          city: ['南昌', '九江', '上饶', '抚州', '宜春', '吉安', '赣州', '萍乡', '新余', '鹰潭']
        },
        {
          regionName: '山东',
          city: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '滨州', '德州', '聊城', '临沂', '菏泽']
        },
        {
          regionName: '河南',
          city: ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '商丘', '周口', '驻马店', '南阳', '信阳', '济源']
        },
        {
          regionName: '湖南',
          city: ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '娄底', '郴州', '永州', '怀化', '湘西土家族苗族自治州']
        },
        {
          regionName: '广东',
          city: ['广州', '深圳', '珠海', '汕头', '佛山', '韶关', '湛江', '肇庆', '江门', '茂名', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮']
        },
        {
          regionName: '海南',
          city: ['海口', '三亚', '三沙', '儋州', '五指山', '琼海', '文昌', '万宁', '东方']
        },
        {
          regionName: '四川',
          city: ['成都', '绵阳', '自贡', '攀枝花', '泸州', '德阳', '广元', '遂宁', '内江', '资阳', '宜宾', '南充', '达州', '雅安', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州', '广安', '巴中', '眉山']
        },
        {
          regionName: '贵州',
          city: ['贵阳', '遵义', '六盘水', '安顺', '毕节', '铜仁', '黔东南苗族侗族自治州', '黔南布依族苗族自治州', '黔西南布依族苗族自治州']
        },
        {
          regionName: '云南',
          city: ['昆明', '曲靖', '玉溪', '邵通', '宝山', '丽江', '普洱', '临沧', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州']
        },
        {
          regionName: '陕西',
          city: ['西安', '宝鸡', '咸阳', '铜川', '渭南', '延安', '榆林', '汉中', '安康', '商洛']
        },
        {
          regionName: '甘肃',
          city: ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '张掖', '平凉', '酒泉', '庆阳', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州']
        },
        {
          regionName: '青海',
          city: ['西宁', '海东', '海北藏族自治州', '黄南藏族自治州', '海南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州']
        },
        {
          regionName: '台湾',
          city: ['台北', '新北', '桃园', '台中', '台南', '高雄', '基隆', '新竹', '嘉义']
        },
        {
          regionName: '内蒙古',
          city: ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '兴安盟', '锡林郭勒盟', '阿拉善盟']
        },
        {
          regionName: '广西',
          city: ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左']
        },
        {
          regionName: '西藏',
          city: ['拉萨', '日喀则', '昌都', '林芝', '山南', '那曲', '阿里地区']
        },
        {
          regionName: '宁夏',
          city: ['银川', '石嘴山', '吴忠', '固原', '中卫']
        },
        {
          regionName: '新疆',
          city: ['乌鲁木齐', '克拉玛依', '吐鲁番', '哈密', '阿克苏地区', '喀什地区', '和田地区', '昌吉回族自治州', '博尔塔拉蒙古自治州', '巴音郭楞蒙古自治州', '克孜勒苏柯尔克孜自治州', '伊犁哈萨克自治州', '塔城地区', '阿勒泰地区']
        },
        {
          regionName: '香港特别行政区'
        },
        {
          regionName: '澳门特别行政区'
        }
      ]
    }
  },
  methods: {
    setCity (index) {
      if (this.region[index].city) {
        this.city = this.region[index].city
        this.province_index = index
      } else {
        this.$emit('setRegion', this.region[index].regionName)
      }
    },
    pickCity (item) {
      this.$emit('setRegion', this.region[this.province_index].regionName + item)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../style/variables";
  .pick{
    position: absolute;
    z-index: 10;
    top: 2rem;
    display: flex;
    width: 16.2rem;
    justify-content: space-between;
    overflow: hidden;
  }
.pick-wrap{
  /*display: block;*/
  /*width: 8rem;*/
  background-color: #F5F5F5;
  /*margin-bottom: 1rem;*/
  text-align: center;
  /*border:1px solid #cecece;*/
  box-shadow: 3px 5px 10px #cecece;
  overflow: hidden;
  .pick-list {
    max-height: 9rem;
    overflow-y: scroll;
    margin-right: -1rem;
    box-sizing: content-box;
  }
  .pick-title {
    height: 2rem;
    line-height: 2rem;
    border-bottom: 1px solid #cecece;
    /*margin-bottom: .5rem;*/
  }
  .pick-item {
    min-height: 1.5rem;
    line-height: 1.5rem;
    width: 7.9rem;
    &:hover {
      color: $main_color;
      background-color: #ececec;
    }
  }
}
</style>
