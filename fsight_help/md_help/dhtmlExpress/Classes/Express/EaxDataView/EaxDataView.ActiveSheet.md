# EaxDataView.ActiveSheet

EaxDataView.ActiveSheet
-


**


# EaxDataView.ActiveSheet


## Синтаксис


ActiveSheet: Number


## Описание


Свойство ActiveSheet** задает ключ активного листа.


## Комментарии


Значение свойства ActiveSheet задается при помощи метода setActiveSheet и возвращается при помощи метода getActiveSheet. Из JSON значение свойства задать нельзя.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента ExpressBox с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Далее установим активным лист с ключом 109:


expressBox.getDataView().setActiveSheet(109)

В результате выполнения данного примера активным стал лист, имеющий ключ 109.


См. также:


[EaxDataView](EaxDataView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
