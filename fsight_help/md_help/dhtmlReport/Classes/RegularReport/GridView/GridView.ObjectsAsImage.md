# PP.Prx.Ui.GridView.ObjectsAsImage

PP.Prx.Ui.GridView.ObjectsAsImage
-


# GridView.ObjectsAsImage


## Синтаксис


ObjectsAsImage: Boolean


## Описание


Свойство ObjectAsImages определяет,
 являются ли диаграмма или карта, расположенные на листе регламентного
 отчета, картинкой или экземпляром компонента [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm).


## Комментарии


Если установлено значение true,
 диаграмма или карта являются картинками, если установлено значение false (по умолчанию) - экземпляром
 компонента [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Необходимо, чтобы в открываемом
 регламентном отчете была диаграмма. Добавим кнопку, при нажатии на которую
 будет выводиться сообщение о том, является ли диаграмма картинкой:


 var isImage = new PP.Ui.Button({
     ParentNode: "but",
     Content: "isImage",
     Click: function () {
         grid = reportBox.getDataView().getGridView();
         if (grid.getObjectsAsImage() == true) {
             alert("Картинка")
         } else {
             alert("Диаграмма")
         }
     }
 });

После выполнения примера на странице будет размещена кнопка, при нажатии
 на которую будет выдаваться сообщение «Картинка» или «Диаграмма» в зависимости
 от того, чем является диаграмма регламентного отчета: картинкой или экземпляром
 компонента [MapChart](dhtmlMapChart.chm::/Components/MapChart/MapChart.htm).


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
