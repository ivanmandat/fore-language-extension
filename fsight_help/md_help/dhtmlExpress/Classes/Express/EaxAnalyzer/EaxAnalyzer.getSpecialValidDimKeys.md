# EaxAnalyzer.getSpecialValidDimKeys

EaxAnalyzer.getSpecialValidDimKeys
-


# EaxAnalyzer.getSpecialValidDimKeys


## Синтаксис


getSpecialValidDimKeys(dimType: [PP.Exp.EaxSpecialDimType](../../../Enums/EaxSpecialDimType.htm));


## Параметры


dimType. Специальный тип измерения.


## Описание


Метод getSpecialValidDimKeys
 возвращает ключи измерений указанного типа.


## Комментарии


Метод возвращает значение типа Array.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Получим наименование измерений,
 которые могут использованы в качестве шкалы времени:


// Возвращает наименования измерений по их ключам
function getDimensionNames(dimKeys) {
    var dimensionNames = [];
    for (var i in expressBox.getSource().getDims()) {
        var dim = expressBox.getSource().getDims()[i];
        if (dimKeys.indexOf(dim.getKey()) !== -1) {
            dimensionNames.push(dim.getName());
        }
    }
    return dimensionNames;
}
// Получаем ключи измерений, которые могут быть использованы в качестве шкалы измерений
var dimKeys = expressBox.getSource().getSpecialValidDimKeys(PP.Exp.EaxSpecialDimType.Timeline);
console.log("Наименование измерений, которые могут использованы в качестве шкалы времени:\n%s",
    getDimensionNames(dimKeys).toString());
В результате выполнения примера в консоли браузера были выведены наименования
 измерений, которые могут быть использованы в качестве шкалы времени:


Наименование измерений, которые могут использованы
 в качестве шкалы времени:


Типы данных,Социально-экономические показатели,Территориальные
 преобразования,Календарь,Факты


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
