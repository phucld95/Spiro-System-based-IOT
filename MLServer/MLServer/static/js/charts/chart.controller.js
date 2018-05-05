'use strict';

angular
  .module('MLServer')
  .controller('chartController', chartController);

chartController.$inject = ['$scope', '$timeout', 'CHARTS'];
function chartController($scope, $timeout, CHARTS) {
  var regressData, scatterData;
  var self = this;

  self.$onInit = $onInit;

  function $onInit() {

    if (self.name === CHARTS.fef.name) {
      regressData = [[27.0, 1.72191348134385], [27.25503355704698, 1.7545855098662548], [27.51006711409396, 1.7875645959705706], [27.76510067114094, 1.8208507396567972], [28.02013422818792, 1.8544439409249343], [28.2751677852349, 1.888344199774982], [28.530201342281877, 1.9225515162069404], [28.78523489932886, 1.9570658902208102], [29.040268456375838, 1.99188732181659], [29.29530201342282, 2.027015810994281], [29.550335570469798, 2.0624513577538823], [29.80536912751678, 2.098193962095395], [30.06040268456376, 2.134243624018818], [30.31543624161074, 2.170600343524152], [30.57046979865772, 2.2072641206113963], [30.825503355704697, 2.244234955280551], [31.08053691275168, 2.281512847531617], [31.335570469798657, 2.319097797364594], [31.59060402684564, 2.3569898047794813], [31.845637583892618, 2.395188869776279], [32.100671140939596, 2.4336949923549875], [32.355704697986575, 2.472508172515607], [32.61073825503356, 2.5116284102581385], [32.86577181208054, 2.5510557055825793], [33.12080536912752, 2.5907900584889303], [33.375838926174495, 2.6308314689771928], [33.63087248322148, 2.6711799370473663], [33.88590604026846, 2.71183546269945], [34.14093959731544, 2.7527980459334445], [34.395973154362416, 2.79406768674935], [34.651006711409394, 2.835644385147166], [34.90604026845638, 2.877528141126893], [35.16107382550336, 2.9197189546885305], [35.41610738255034, 2.9622168258320785], [35.671140939597315, 3.005021754557537], [35.92617449664429, 3.0481337408649063], [36.18120805369128, 3.091552784754188], [36.43624161073826, 3.135278886225379], [36.691275167785236, 3.1793120452784804], [36.946308724832214, 3.2236522619134926], [37.20134228187919, 3.268299536130416], [37.45637583892618, 3.3132538679292507], [37.711409395973156, 3.358515257309995], [37.966442953020135, 3.4040837042726504], [38.22147651006711, 3.449959208817216], [38.47651006711409, 3.496141770943693], [38.73154362416108, 3.542631390652082], [38.986577181208055, 3.5894280679423796], [39.241610738255034, 3.6365318028145883], [39.49664429530201, 3.6839425952687077], [39.75167785234899, 3.731660445304738], [40.006711409395976, 3.7796853529226806], [40.261744966442954, 3.8280173181225323], [40.51677852348993, 3.8766563409042947], [40.77181208053692, 3.9256024212679694], [41.02684563758389, 3.9748555592135517], [41.281879194630875, 4.024415754741047], [41.53691275167785, 4.074283007850453], [41.79194630872483, 4.124457318541769], [42.04697986577182, 4.174938686814997], [42.302013422818796, 4.2257271126701355], [42.557046979865774, 4.276822596107182], [42.81208053691275, 4.328225137126142], [43.06711409395973, 4.379934735727011], [43.322147651006716, 4.431951391909794], [43.57718120805369, 4.484275105674483], [43.83221476510067, 4.536905877021087], [44.08724832214765, 4.589843705949599], [44.34228187919463, 4.643088592460022], [44.597315436241615, 4.696640536552358], [44.852348993288594, 4.750499538226602], [45.10738255033557, 4.8046655974827575], [45.36241610738255, 4.8591387143208244], [45.61744966442953, 4.913918888740802], [45.872483221476514, 4.96900612074269], [46.12751677852349, 5.024400410326488], [46.38255033557047, 5.080101757492198], [46.63758389261745, 5.136110162239817], [46.89261744966443, 5.192425624569347], [47.14765100671141, 5.249048144480791], [47.40268456375839, 5.305977721974143], [47.65771812080537, 5.363214357049405], [47.912751677852356, 5.42075804970658], [48.16778523489933, 5.478608799945662], [48.42281879194631, 5.536766607766659], [48.67785234899329, 5.595231473169565], [48.93288590604027, 5.654003396154381], [49.187919463087255, 5.71308237672111], [49.442953020134226, 5.772468414869746], [49.69798657718121, 5.832161510600296], [49.95302013422819, 5.892161663912755], [50.20805369127517, 5.952468874807125], [50.463087248322154, 6.013083143283406], [50.718120805369125, 6.074004469341596], [50.97315436241611, 6.1352328529817015], [51.22818791946309, 6.1967682942037134], [51.48322147651007, 6.258610793007637], [51.73825503355705, 6.320760349393472], [51.993288590604024, 6.383216963361217], [52.24832214765101, 6.445980634910873], [52.50335570469799, 6.50905136404244], [52.758389261744966, 6.572429150755918], [53.01342281879195, 6.636113995051306], [53.26845637583892, 6.700105896928603], [53.52348993288591, 6.764404856387814], [53.77852348993289, 6.829010873428935], [54.033557046979865, 6.893923948051966], [54.28859060402685, 6.959144080256909], [54.54362416107383, 7.02467127004376], [54.79865771812081, 7.090505517412524], [55.053691275167786, 7.156646822363197], [55.308724832214764, 7.223095184895782], [55.56375838926175, 7.289850605010279], [55.81879194630873, 7.356913082706685], [56.07382550335571, 7.424282617985001], [56.32885906040269, 7.49195921084523], [56.58389261744966, 7.559942861287366], [56.83892617449665, 7.628233569311416], [57.09395973154363, 7.696831334917376], [57.348993288590606, 7.7657361581052475], [57.60402684563759, 7.83494803887503], [57.85906040268456, 7.90446697722672], [58.11409395973155, 7.974292973160323], [58.369127516778526, 8.044426026675836], [58.624161073825505, 8.11486613777326], [58.87919463087249, 8.185613306452595], [59.13422818791947, 8.256667532713843], [59.38926174496645, 8.328028816556998], [59.644295302013425, 8.399697157982065], [59.899328859060404, 8.471672556989041], [60.15436241610738, 8.54395501357793], [60.40939597315437, 8.616544527748731], [60.664429530201346, 8.689441099501439], [60.919463087248324, 8.762644728836062], [61.1744966442953, 8.836155415752593], [61.42953020134228, 8.909973160251033], [61.68456375838927, 8.984097962331388], [61.939597315436245, 9.058529821993652], [62.19463087248322, 9.133268739237824], [62.4496644295302, 9.208314714063908], [62.70469798657719, 9.283667746471908], [62.959731543624166, 9.359327836461814], [63.214765100671144, 9.435294984033629], [63.46979865771812, 9.511569189187357], [63.7248322147651, 9.588150451922996], [63.97986577181209, 9.665038772240546], [64.23489932885906, 9.742234150140003], [64.48993288590604, 9.819736585621376], [64.74496644295303, 9.89754607868466], [65.0, 9.97566262932985]];
      scatterData = [[0.0, 0.0], [59.3584, 8.53], [57.89483, 8.54], [58.78363, 11.5], [57.301323, 8.36], [52.77489, 6.77], [55.542633, 7.49], [57.913677, 8.41], [56.657177, 7.53], [50.029102, 5.36], [56.33523, 7.45], [56.53595, 7.69], [60.42749, 9.23], [58.25972, 8.52], [53.725986, 6.92], [56.92505, 8.5], [57.44138, 7.7], [51.40803, 6.4], [58.405872, 8.94], [56.25468, 7.56], [56.420383, 7.9], [54.686558, 8.19], [56.651203, 8.19], [50.035385, 6.56], [53.868305, 6.25], [56.815, 8.01], [55.92267, 6.53], [49.046883, 4.15], [56.264008, 7.42], [54.540535, 7.59], [59.4918, 8.9], [56.655735, 5.54], [50.091637, 6.68], [54.26995, 8.5], [56.630077, 7.7], [44.930286, 6.38], [57.823723, 7.77], [45.67708, 4.15], [51.611374, 5.6], [43.36025, 4.86], [49.86159, 6.31], [45.013477, 4.72], [46.993053, 4.2], [53.582893, 6.74], [49.22936, 5.32], [39.770725, 2.89], [42.12642, 5.27], [44.455776, 5.14], [53.38876, 5.84], [53.397694, 3.19], [39.233883, 3.77], [43.399136, 6.85], [52.02902, 5.77], [51.067577, 5.54], [51.020412, 4.4], [37.73498, 1.81], [42.097027, 4.07], [39.449955, 2.32], [34.60193, 3.4], [42.21509, 2.29], [35.488895, 2.23], [38.195618, 3.85], [36.51375, 2.78], [30.306557, 1.78], [28.368036, 2.41], [33.268913, 2.55], [36.016148, 2.61], [38.677433, 1.57], [35.77941, 1.85], [35.080612, 2.46], [31.306898, 2.49], [32.87073, 3.49], [44.91695, 2.52]];
    } else if (self.name === CHARTS.pef.name) {
      regressData = [[30.3, 5.5], [45.5, 6.7]];
      scatterData = [[50.6, 7.8], [45.8, 7.0]];
    }

    $timeout(function () {
      Highcharts.chart(self.idChart, {
        xAxis: {
          title: {
            text: 'Input value'
          },
          min: 25,
          max: 65
        },
        yAxis: {
          title: {
            text: 'Output value'
          },
          min: 0
        },
        title: {
          text: self.name
        },
        series: [{
          type: 'line',
          name: 'Regression Line',
          data: regressData,
          marker: {
            enabled: false
          },
          states: {
            hover: {
              lineWidth: 5
            }
          },
          enableMouseTracking: false
        }, {
          type: 'scatter',
          name: 'Real values',
          data: scatterData
        }]
      });

    })

  }

}