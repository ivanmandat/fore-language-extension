# EaxMdService.setDimensionSettings

EaxMdService.setDimensionSettings
-


# EaxMdService.setDimensionSettings


## Синтаксис


setDimensionSettings(report, metadata, callback);


## Параметры


Report. [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm).
 Экземпляр экспресс отчета;


Metadata. Object.
 Метаданные;


Callback. PP.Delegate | Function. Функция обратного вызова.


## Описание


Метод setDimensionSettings предназначен
 для установки значений в панели свойств «Расшифровка
 измерений».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с
 наименованием «expressBox» (см.
 «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»).


//Получим отчет.


var report
 = expressBox.getSource();


//Получим метаданные.


var metadata
 = report.getMetadata().dimensionSettings;


var part
 = metadata.drillSettings;


//Зададим значение
 измерения для переменной, которое мы хотим установить.


part.mode = `Replace`;


//Вызываем метод
 setDimensionSettings.


eaxMdService.setDimensionSettings(eaxAnalyzer,
 metadata, part);


//Обновим дерево
 элементов.


dataV = expressBox.getDataView();


dataV.refresh();


После выполнения примера, на панели расшифровки для поля «Способ
 изменения отметки» будет установлено значение «Замена».


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
