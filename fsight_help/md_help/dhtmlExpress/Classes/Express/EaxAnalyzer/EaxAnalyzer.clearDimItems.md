# EaxAnalyzer.clearDimItems

EaxAnalyzer.clearDimItems
-


**


# EaxAnalyzer.clearDimItems


## Синтаксис


clearDimItems();


## Описание


Метод clearDimItems** удаляет
 все загруженные элементы измерения в экспресс-отчете.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим идентификаторы только тех
 измерений, у которых присутствуют элементы. Затем очистим все элементы
 и снова попытаемся найти данные измерения:


var eaxAnalyzer = expressBox.getSource();
// Функция для вывода идентификаторов измерений с элементами
var getDimItemsInfo = function () {
    console.log("Измерения с элементами: ");
    var isExist = false;
    var dims = eaxAnalyzer.getDims();
    for (var i = 0; i < dims.length; i++) {
        var dimItems = dims[i].getChildEls("");
        if (dimItems != null) {
            console.log(dims[i].getOdId().id);
            isExist = true;
        }
    }
    if (!isExist) {
        console.log("Элементы отсутствуют");
    }
}
// Выводим идентификаторы измерений, у которых есть элементы
getDimItemsInfo();
// Очищаем элементы всех измерений
eaxAnalyzer.clearDimItems();
// Повторяем вывод
getDimItemsInfo();

В результате выполнения примера в консоли браузера были выведены идентификаторы
 измерений, у которых присутствуют элементы (до и после выполнения метода
 clearDimItems):


Измерения с элементами:


FILOBFIDCJOBEOAEBEFECHFLCDGNDHBEMKGFPNMEMNPFGHNN!M!S!EFDHAPCMGCJOBEOAEDPHNLNBBBAGIOKBEJLDAGOHPIGJDFFFB!1824


FILOBFIDCJOBEOAEBEFECHFLCDGNDHBEMKGFPNMEMNPFGHNN!M!S!EFDHAPCMGCJOBEOAEDPHNLNBBBAGIOKBEJLDAGOHPIGJDFFFB!2038


Измерения с элементами:


Элементы отсутствуют


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
