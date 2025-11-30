# EaxAnalyzer.PeriodicalUpdateInterval

EaxAnalyzer.PeriodicalUpdateInterval
-


# EaxAnalyzer.PeriodicalUpdateInterval


## Синтаксис


PeriodicalUpdateInterval: String;


## Описание


Свойство PeriodicalUpdateInterval
 определяет интервал периодического обновления экспресс-отчета.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setPeriodicalUpdateInterval,
 а возвращается с помощью метода getPeriodicalUpdateInterval.


Интервал периодического обновления, определяемый свойством, имеет вид
 «d.hh:mm:ss.xxx». Если строка пустая, периодическое обновление отключено.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Настроим интервал периодического
 обновления экспресс-отчета:


report = expressBox.getSource();
// Определим интервал периодического обновления
report.setPeriodicalUpdateInterval("0.01:30:00.000");
В результате выполнения примера будет настроен интервал периодического
 обновления экспресс-отчета.


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
