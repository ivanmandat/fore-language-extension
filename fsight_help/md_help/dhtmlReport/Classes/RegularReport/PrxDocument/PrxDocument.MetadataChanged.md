# PrxDocument.MetadataChanged

PrxDocument.MetadataChanged
-


# PrxDocument.MetadataChanged


## Синтаксис


MetadataChanged: PP.Delegate | function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии. Аргументы -следующие элементы перечисления [PP.Prx.Property](../../../Enums/PP.Prx.Property.htm):


-
Recalc. Полное обновление отчета (по умолчанию);


-
ControlValue. Обновление значений элементов управления;


-
DimSelection. Обновление отметки измерений;


-
ActiveSheet. Обновление активного листа.


## Описание


Событие MetadataChanged наступает при изменении метаданных текстового листа отчета.


## Комментарии


Событие наступает при вызове метода [PrxDocument.refresh](PrxDocument.refresh.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). В открытом регламентном отчете должен содержаться текстовый лист. Обновим активный текстовый лист:


dv = reportBox.getDataView(); //получаем область данных отчета


doc = dv.getActiveSheetView(); //получаем активный лист (текстовый лист)


doc.MetadataChanged.add(function (sender, args) {


    console.log(args)


});


doc.refresh(PP.Prx.Property.ActiveSheet);


После выполнения примера будет обновлен активный текстовый лист отчета, при этом в консоль браузера будет выведено сообщение «ActiveSheet».


См. также:


[PrxDocument](PrxDocument.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
