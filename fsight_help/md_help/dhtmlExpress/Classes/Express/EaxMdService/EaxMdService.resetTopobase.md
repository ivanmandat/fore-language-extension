# EaxMdService.resetTopobase

EaxMdService.resetTopobase
-


# EaxMdService.resetTopobase


## Синтаксис


resetTopobase (report: [PP.Exp.EaxAnalyzer](../EaxAnalyzer/EaxAnalyzer.htm),
 callback: PP.Delegate);


## Параметры


report. Активный лист отчета;


callback.
 Процедура обратного вызова.


## Описание


Метод resetTopobase возвращает
 для экспресс-отчета топооснову по умолчанию.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной таблицей в рабочей
 области экспресс-отчёта. Предполагается наличие в репозитории топоосновы
 с ключом 1234. Заменим топооснову экспресс-отчета:


source = expressBox.getSource().getActiveSheet();
service = expressBox._Service;
service.setTopobaseKey (source, 1234);
Вернем топооснову, установленную для отчета по умолчанию:


service.setTopobaseKey (source);
После выполнения примера для экспресс-отчета сначала была установлена
 топооснова с указанным ключом, после чего была возвращена топооснова по
 умолчанию.


См. также:


[EaxMdService](EaxMdService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
