# PrxMdService.openReport

PrxMdService.openReport
-


# PrxMdService.openReport


## Синтаксис


openReport (key: Integer, params: Array, interactive: Boolean, callback: PP.Delegate);


## Параметры


key. Ключ отчета, который необходимо открыть;


params. Массив параметров, которые будут применяться при открытии отчета;


interactive. Определяет, будет ли при вызове метода открываться [диалог для ввода значений параметров](../../../Components/RegularReport/Dialogs/ParamsDialog.htm). Если установлено значение true (по умолчанию), диалог будет открываться, иначе - не будет;


callback. Процедура обратного вызова.


## Описание


Метод openReport открывает регламентный отчет с параметрами.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» и сервиса для работы с регламентным отчетом с наименованием «prxMbService» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Предполагается наличие в репозитории регламентного отчета с ключом 1023, для которого установлены параметры. Откроем регламентный отчет, а перед открытием отчета отобразим диалог для установки параметров:


//получаем источник отчета


report = reportBox.getSource();


//получаем массив параметров


params = report.getParams();


//открываем отчет с параметрами


prxMdService.openReport(1023, params, true);


После выполнения примера будет открыт отчет с указанным ключом и отобразится [диалог для ввода значений параметров](../../../Components/RegularReport/Dialogs/ParamsDialog.htm).


Примечание. [Диалог для ввода значений параметров](../../../Components/RegularReport/Dialogs/ParamsDialog.htm) не отобразится, если для всех параметров установлено значение по умолчанию.


См. также:


[PrxMdService](PrxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
