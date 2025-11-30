# ISmLinearRegress.UseGDLTerms

ISmLinearRegress.UseGDLTerms
-


# ISmLinearRegress.UseGDLTerms


## Синтаксис


UseGDLTerms: Boolean;


## Описание


Свойство UseGDLTerms определяет,
 использовать ли распределенные лаги Койка для расчёта линейной регрессии.


## Комментарии


Допустимые значения:


	- True. Для расчёта используются
	 распределенные лаги Койка. Недопустимо использование лаговых переменных
	 (свойство [ISmLinearRegress.PDLTermCollection](ISmLinearRegress.PDLTermCollection.htm))
	 и авторегрессии/скользящего среднего (свойство [ISmLinearRegress.ARMA](ISmLinearRegress.ARMA.htm)).

	В свойство [ModelCoefficients](ISmLinearRegress.ModelCoefficients.htm).Coefficients
	 выгружаются оцененные коэффициенты модели в следующем порядке: beta01, …, beta0m,
	 alpha (m
	 - число переменных в модели).


	- False. Распределенные
	 лаги не используются.


## Пример


Использование свойства приведено в примере для [ISmLinearRegress.GDLTerms](ISmLinearRegress.GDLTerms.htm).


См. также:


[ISmLinearRegress](ISmLinearRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
