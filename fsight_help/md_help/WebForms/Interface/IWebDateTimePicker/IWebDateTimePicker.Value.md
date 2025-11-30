# IWebDateTimePicker.Value

IWebDateTimePicker.Value
-


# IWebDateTimePicker.Value


## Синтаксис


Value: DateTime;


## Описание


Свойство Value определяет значение,
 отображаемое в компоненте.


## Комментарии


Значение должно находиться в диапазоне [[MinValue](IWebDateTimePicker.MinValue.htm),
 [MaxValue](IWebDateTimePicker.MaxValue.htm)].


## Пример


Для выполнения примера в репозитории предполагается наличие веб-формы
 и расположенного на ней компонента DateTimePicker с наименованием DateTimePicker1.
 Указанная процедура установлена в качестве обработчика события OnShow
 для веб-формы.


	Sub TESTWebFormOnShow;

	Var

	    DTValue: DateTime;

	Begin

	    DTValue := DateTime.Now;

	    DateTimePicker1.MaxValue := DateTime.AddYears(DTValue, 5);

	    DateTimePicker1.MinValue := DateTime.AddYears(DTValue, -5);

	    DateTimePicker1.Value := DTValue;

	End Sub TESTWebFormOnShow;


При запуске веб-формы в компоненте DateTimePicker1 будут ограничены
 минимальная и максимальная допустимые даты, а также в качестве значения
 будет указана текущая дата.


См. также:


[IWebDateTimePicker](IWebDateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
