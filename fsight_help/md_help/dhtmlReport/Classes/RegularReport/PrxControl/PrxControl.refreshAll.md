# PrxControl.refreshAll

PrxControl.refreshAll
-


# PrxControl.refreshAll


## Синтаксис


refreshAll (args);


## Параметры


args. Параметры обновления элемента управления.


## Описание


Метод refreshAll обновляет элемент измерения регламентного отчета.


## Комментарии


Метод refreshAll является аналогом метода [PrxControl.refresh](PrxControl.refresh.htm).


## Пример


Для выполнения примера предполагается наличие на html-странице компонента [ReportBox](../../../Components/RegularReport/ReportBox/ReportBox.htm) с наименованием «reportBox» (см. «[Пример размещения компонента ReportBox](../../../Components/RegularReport/ReportBox/ReportBox_Example.htm)»). Регламентный отчет должен содержать элементы управления. Обновим отметку


        controlBar = reportBox.getDataView().getControlBar();
        ctrl = controlBar.getControlAt(0);
        ctrl.Refreshed.add(function (sender, args) {
           console.log("Значение элемента управления обновлено")
        });
        ctrl.PropertyChanged.add(function (sender, args) {
           console.log("Изменено значение свойства " + args.PropertyName)
        });
        ctrl.refreshAll(new PP.Mb.Ui.PropertyChangedEventArgs({
           PropertyName: PP.Prx.Property.ControlValue
        }));
        controlBar.save();

После выполнения примера будет обновлено и сохранено значение в первом элементе управления регламентного отчета. В консоль браузера будет выведено сообщение «Значение элемента управления обновлено». При изменении значения элемента измерения в консоль браузера также будет выводиться сообщение «Изменено значение свойства ControlValue».


См. также:


[PrxControl](PrxControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
