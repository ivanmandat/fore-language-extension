# IEaxDataAreaExternalTransformation.UseWholeProblemSelection

IEaxDataAreaExternalTransformation.UseWholeProblemSelection
-


# IEaxDataAreaExternalTransformation.UseWholeProblemSelection


## Синтаксис


UseWholeProblemSelection: Boolean;


## Описание


Свойство UseWholeProblemSelection
 определяет область расчёта задачи моделирования.


## Комментарии


Допустимые значения:


	- True. Для расчёта используется
	 вся отметка из задачи моделирования без учёта отметки в регламентном
	 отчёте;


	- False. Для расчёта используется
	 пересечение отметки из задачи моделирования по всем измерениям с отметкой
	 в регламентном отчёте.


Используется только при подключенных задачах моделирования к регламентному
 отчёту. Для подключения задачи моделирования к регламентному отчёту используйте
 свойство [IEaxDataAreaExternalTransformation.Problem](IEaxDataAreaExternalTransformation.Problem.htm).


Определение области расчёта аналогично выбору [области
 расчёта](DataEntryForms.chm::/Web/Table/Calculation_Practices.htm#common) в формах ввода.


См. также:


[IEaxDataAreaExternalTransformation](IEaxDataAreaExternalTransformation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
