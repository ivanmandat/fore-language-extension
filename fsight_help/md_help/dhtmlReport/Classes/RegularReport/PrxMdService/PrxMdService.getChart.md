# PrxMdService.getChart

PrxMdService.getChart
-


# PrxMdService.getChart


## Синтаксис


getChart (report, chartId, asImage, imageProp, useObjectsUrl,
 callback);


## Параметры


report. Отчет, для которого
 будет получена диаграмма;


chartId. Идентификатор диаграммы;


asImage. Признак того, как
 будет получена диаграмма: true
 - как картинка, false - как компонент
 [Chart](dhtmlChart.chm::/Components/Chart/Chart.htm).


imageProp. Параметры картинки.


useObjectsUrl. Определяет,
 использовать ли хендлер для отображения картинок (нужен для корректной
 работы в Internet Explorer версии 9 и выше): true - использовать, false
 -не использовать.


callback. Возвратная функция.


## Описание


Метод getChart возвращает метаданные
 диаграммы отчета.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm)
 с наименованием «reportBox» (см. «[Пример
 размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Необходимо, чтобы в открываемом
 регламентном отчете была диаграмма. Добавим кнопку, при нажатии на которую
 в консоль браузера будут выводиться метаданные диаграммы регламентного
 отчета:


        getChartMeta = function () {
           ident = reportBox.getDataView().getGridView().getControl().getModel().getObjects()[0].getIdent();
           prxMbService.getChart(prxReport, ident, false, PP.Mb.NULL, false, function (sender, args) {
              var res = JSON.parse(args.ResponseText);
              var cChartData = res.GetChartResult;
              console.log(cChartData)
           });
        };
        var chartMeta = new PP.Ui.Button({
           ParentNode: "but",
           Content: "Получить метаданные диаграммы",
           Click: getChartMeta
        });;

После выполнения примера в консоль браузера будет выведен JSON-объект,
 содержащий метаданные диаграммы регламентного отчета.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
