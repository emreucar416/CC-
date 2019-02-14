const Discord = module.require('discord.js');

var jokes = [
"Bodrum kata girmek yasaktı. Bu her zaman böyle olmuştu. Ve çocuk, annesinin koyduğu yasağı çiğnememek için direniyordu. Çünkü o annesinin sözünden hiçbir zaman çıkmazdı. Ama bir gün, bodrumdan gelen seslere daha fazla karşı koyamadı ve aşağıya inmeye karar verdi. Sonuçta; annesi dışarıda çim biçmekle meşguldü ve o da bu sırada bodrumdaki küçük köpekle birazcık oynayabilirdi. Hem belki de çok açtı köpek. Sonuçta; günlerdir ağlar gibi havlıyordu. Yanına biraz da süt alarak bodrum kata inmeye başladı ve kilitli kapıyı açtı.Aşağısı çok karanlıktı ve köpeğin hiç sesi çıkmıyordu. İçeri doğru biraz daha ilerlediğinde, gözleri karanlığa alışmış, etraftaki cisimleri seçmeye başlamıştı. Nefesini tutmuş, çevresine bakmaya devam ederken, bir çift el onu arkadan sımsıkı tuttu ve dışarı çıkardı. Ne olduğunu anlayamayan çocuk, karşısında ona öfkeyle bakan annesini gördü. Çok kızgın olan ve ona ilk kez bağıran annesine bir daha oraya inmeyeceğine söz vererek odasına çıktı. Ve bir daha annesini sinirlendirmemek için ne duyduğu köpek seslerinden ne de bodrumdaki elleri ve ayakları olmayan çocuktan söz edebildi.",
"Yeni bir iş görüşmesi için şehir dışına gidiyordum. Uzun süredir beş parasızdım ve bu işi alırsam hayatımı yeniden yoluna koyabilirdim. Saatlerce araba kullandıktan sonra, geceyi geçirmek için yol kenarındaki bir motele girdim. Resepsiyondaki tuhaf kadına bir oda istediğimi söyledikten sonra anahtarımı alarak merdivenlere doğru yürüdüm. Tam bu sırada kadın “Son bir şey daha beyefendi! Otelde numarasız ve her zaman kilitli olan bir oda var. Oraya yaklaşmamanızı öneririm.” dedi. Çatlak kadının söylediklerini umursamayarak odaya çıktım ve yatağa uzandım. Ama birkaç saat sonra rahatsız edici bir su sesiyle uyandım.Yeniden uyumaya çalışsam da durmak bilmeyen ses buna engel oluyordu. Ben de odanın kapısını açıp, musluğu açık unutan kimse onu bulmak için koridora çıktım. Çok geçmeden su sesinin karşıdaki odadan geldiğini anladım ve kapılarını çaldım. Her seferinde daha hızlı vursam da kapıyı açan kimse yoktu. Sonunda delikten bakmaya karar verdim ve gözümü kapı deliğine yaklaştırarak içeriyi görmeye çalıştım. Fakat gördüğüm tek şey kırmızıydı! Birileri kapı deliğine kırmızı bir örtü falan asmış olmalıydı. Sinirle aşağıya inip, resepsiyondaki kadına olanları anlattım.Ve kadın beni sessizce dinledikten sonra, odanın hikayesini anlatmaya başladı. “Yıllar önce o odada bir kadın öldürüldü. Ve sadece kapıdan içeri giren genç bir adama baktığı için. Kıskanç kocasının gözü döndü ve kadına odalarına çıkmayı teklif etti. O kadar güzel ve naif bir kadındı ki! Gülümseyerek kocasının dediğini yaptı ve merdivenlerden yukarı çıktı. Sabah olduğunda çift aşağıya inmedi, öğlen ya da akşam da öyle. Sonunda anahtarımla odalarına girdiğimde banyodan dışarı taşan suyu gördüm. Banyonun kapısını açtığımda ise kadının bembeyaz teni ve oyulmuş, kırmızı gözleriyle karşılaştım”"
];

module.exports.run = async (bot, message, args) => {

      var DAD = new Discord.RichEmbed()
      .setDescription(jokes[Math.floor(Math.random() * jokes.length)])
      .setColor("0x#FF0000")

      message.channel.send(DAD);

}

module.exports.help = {
    name: "korkugünlüğü"
}
