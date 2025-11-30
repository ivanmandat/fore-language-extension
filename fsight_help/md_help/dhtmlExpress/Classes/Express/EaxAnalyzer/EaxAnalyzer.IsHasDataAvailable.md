# EaxAnalyzer.IsHasDataAvailable

EaxAnalyzer.IsHasDataAvailable
-


# EaxAnalyzer.IsHasDataAvailable


## Синтаксис


IsHasDataAvailable: Boolean


## Описание


Свойство IsHasDataAvailable
 определяет, будут ли при изменениях данных в измерениях отправляться запросы
 на обновление состояния поля «@hasData» в метаданных элемента
 измерения.


## Комментарии


Если для свойства установлено значение true,
 то при изменениях данных в измерениях будут отправляться запросы на обновление
 состояния поля «@hasData» в метаданных элемента измерения. По умолчанию
 установлено значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Установим для свойства IsHasDataAvailable
 значение true:


eaxAnalyzer =  expressBox.getSource().getActiveSheet();
eaxAnalyzer.setIsHasDataAvailable(true);
//Обновим боковую панель экспресс-отчета
expressBox.getPropertyBarView().refresh();
После выполнения примера для свойства IsHasDataAvailable
 будет установлено значение true.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
