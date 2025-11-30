# EaxAnalyzer.getTypeGrowth

EaxAnalyzer.getTypeGrowth
-


**


# EaxAnalyzer.getTypeGrowth


## Синтаксис


getTypeGrowth();


## Описание


Метод getTypeGrowth** возвращает тип установленного индикатора роста.


## Комментарии


Метод возвращает элемент перечисления PP.Exp.Ui.[IndicatorType](../../../Enums/IndicatorType.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Откроем таблицу экспресс-отчета и на ленте инструментов у кнопки «Индикатор роста» выберем пункт «Для столбцов». Теперь проверим тип установленного индикатора роста:


var eaxAnalyzer = expressBox.getSource();
// Определим тип установленного индикатора роста
var growthType = eaxAnalyzer.getTypeGrowth()
if (growthType != null) {
    console.log("Тип индикатора роста: " + growthType);
} else {
    console.log("Тип индикатора роста не определен.");
};

В результате выполнения примера в консоли браузера будет выведено следующее сообщение:


Тип индикатора роста: Columns


Если мы выберем пункт «По строкам», то указанный пример выведет тип индикатора рост Rows.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
