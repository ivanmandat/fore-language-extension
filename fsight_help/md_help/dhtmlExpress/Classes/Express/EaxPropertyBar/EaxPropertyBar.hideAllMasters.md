# EaxPropertyBar.hideAllMasters

EaxPropertyBar.hideAllMasters
-


**


# EaxPropertyBar.hideAllMasters


## Синтаксис


hideAllMasters(withSelf: Boolean);


## Параметры


*withSelf.* Если параметр имеет значение true, то метод скрывает и все свои собственные панели.


## Описание


Метод hideAllMasters** скрывает все мастера.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [EaxPropertyBar](../../../Components/Express/EaxPropertyBar/EaxPropertyBar.htm) с наименованием «eaxPropBar» (см. «[Пример совместного размещения EaxPropertyBar и EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Example.htm)»). Далее скроем все мастеры, включая также собственные панели:


// Скроем все панели мастера, включая все собственные панели
eaxPropBar.hideAllMasters(true);

После выполнения данного примера будут скрыты все мастера и собственные панели.


См. также:


[EaxPropertyBar](EaxPropertyBar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
