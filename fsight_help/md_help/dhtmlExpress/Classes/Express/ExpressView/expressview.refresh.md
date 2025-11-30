# ExpressView.refresh

ExpressView.refresh
-


**


# ExpressView.refresh


## Синтаксис


refresh(args: [PP.Mb.Ui.PropertyChangedEventArgs](dhtmlMetabase.chm::/Classes/Metabase/PropertyChangedEventArgs/PropertyChangedEventArgs.htm));


## Параметры


*args.* Параметры события PropertyChanged,
 возникающего при изменении значений указанных свойств.


## Описание


Метод refresh** обновляет
 указанные элементы экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием
 «expressBox» (см. [Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Обновим панель инструментов, панель
 свойств и заголовок экспресс-отчета:


// Обновляем панель инструментов, панель свойств и заголовок
expressBox.refresh(new PP.Mb.Ui.PropertyChangedEventArgs({
    PropertyName: PP.Exp.Ui.ControlType.DataView,
    TypeUpdateData: [PP.Exp.Ui.ViewTypeUpdate.Ribbon,
        PP.Exp.Ui.ViewTypeUpdate.PropertyBar,
        PP.Exp.Ui.ViewTypeUpdate.Title]
}));

В результате выполнения примера будут обновлены панель инструментов,
 панель свойств и заголовок экспресс-отчета


См. также:


[ExpressView](ExpressView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
