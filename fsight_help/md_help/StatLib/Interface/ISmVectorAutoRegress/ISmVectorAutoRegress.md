# ISmVectorAutoRegress

ISmVectorAutoRegress
-


# ISmVectorAutoRegress


Сборка: Stat;


## Описание


Интерфейс ISmVectorAutoRegress
 определяет параметры для расчета векторной авторегрессии или для расчета
 импульсной функции отклика.


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmVectorAutoRegress


## Комментарии


Импульсная функция отклика используется для выяснения динамической связи
 между переменными в векторной авторегрессии. Данная функция описывает
 эффект, который оказывает изменение одной эндогенной переменной на текущие
 и будущие значения других эндогенных переменных.


Для расчета импульсной матрицы необходимо определить свойства [ImpulseAROrder](ISmVectorAutoRegress.ImpulseAROrder.htm)
 и [ImpulsePeriod](ISmVectorAutoRegress.ImpulsePeriod.htm),
 причем модель рассчитывается с авторегрессией порядка 1, 2, 3, … ImpulseAROrder,
 а значения параметра [ISlEquation.AutoRegressionOrder](../ISlEquation/ISlEquation.AutoRegressionOrder.htm)
 игнорируется.


В случае когда не задан хотя бы один из данных параметров (ImpulseAROrder,
 ImpulsePeriod), рассчитывается векторная авторегрессионная модель с авторегрессией,
 задаваемой вектором [ISlEquation.AutoRegressionOrder](../ISlEquation/ISlEquation.AutoRegressionOrder.htm),
 при этом [ISlEquation.ImpulseMatrix](../ISlEquation/ISlEquation.ImpulseMatrix.htm)
 не рассчитывается.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [Equations](ISmVectorAutoRegress.Equations.htm)


		 Свойство ISlEquations
		 определяет параметры коллекции уравнений.


		 ![](../../Property.gif)
		 [ImpulseAROrder](ISmVectorAutoRegress.ImpulseAROrder.htm)


		 Свойство ImpulseAROrder
		 определяет порядок авторегрессии для импульсной функции.


		 ![](../../Property.gif)
		 [ImpulsePeriod](ISmVectorAutoRegress.ImpulsePeriod.htm)


		 Свойство ImpulsePeriod
		 определяет период для импульсной функции.


		 ![](../../Property.gif)
		 [MissingData](ISmVectorAutoRegress.MissingData.htm)


		 Свойство MissingData
		 определяет метод и параметры обработки пропусков.


		 ![](../../Property.gif)
		 [ModelPeriod](ISmVectorAutoRegress.ModelPeriod.htm)


		 Свойство ModelPeriod
		 определяет период идентификации.


		 ![](../../Property.gif)
		 [VARStatistics](ISmVectorAutoRegress.VARStatistics.htm)


		 Свойство VARStatistics
		 возвращает VAR-статистики.


## Свойства, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisplayName](../IStatMethod/IStatMethod.DisplayName.htm)
		 Свойство DisplayName
		 возвращает внешнее наименование метода.


		 ![](../../Property.gif)
		 [ErrorByStatus](../IStatMethod/IStatMethod.ErrorByStatus.htm)
		 Свойство ErrorByStatus
		 возвращает сообщение об ошибке по ее номеру.


		 ![](../../Property.gif)
		 [Errors](../IStatMethod/IStatMethod.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях.


		 ![](../../Property.gif)
		 [Name](../IStatMethod/IStatMethod.Name.htm)
		 Свойство Name возвращает
		 внутреннее наименование метода.


		 ![](../../Property.gif)
		 [PerformanceTime](../IStatMethod/IStatMethod.PerformanceTime.htm)
		 Свойство PerformanceTime
		 возвращает время выполнения метода.


		 ![](../../Property.gif)
		 [Status](../IStatMethod/IStatMethod.Status.htm)
		 Свойство Status возвращает
		 статус выполнения метода.


		 ![](../../Property.gif)
		 [SupportsR](../IStatMethod/IStatMethod.SupportsR.htm)
		 Свойство SupportsR
		 возвращает признак поддержки расчета статистического метода через
		 пакет R.


		 ![](../../Property.gif)
		 [UseR](../IStatMethod/IStatMethod.UseR.htm)
		 Свойство UseR определяет,
		 будет ли расчет статистического метода производиться через
		 пакет R.


		 ![](../../Property.gif)
		 [WarningByStatus](../IStatMethod/IStatMethod.WarningByStatus.htm)
		 Свойство WarningByStatus
		 возвращает текст предупреждения по его номеру.


		 ![](../../Property.gif)
		 [Warnings](../IStatMethod/IStatMethod.Warnings.htm)
		 Свойство Warnings возвращает предупреждения, возникшие при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsCount](../IStatMethod/IStatMethod.WarningsCount.htm)
		 Свойство WarningsCount
		 возвращает число предупреждений, возникших при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsNumbers](../IStatMethod/IStatMethod.WarningsNumbers.htm)
		 Свойство WarningsNumbers возвращает номера предупреждений, возникших при расчёте метода.


## Методы, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [Clone](../IStatMethod/IStatMethod.Clone.htm)
		 Метод Clone клонирует
		 объект статистического метода.


		 ![](../../Sub.gif)
		 [Execute](../IStatMethod/IStatMethod.Execute.htm)
		 Метод Execute осуществляет
		 выполнение статистического метода.


		 ![](../../Sub.gif)
		 [LoadFromXML](../IStatMethod/IStatMethod.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек статистического метода из XML-кода.


		 ![](../../Sub.gif)
		 [SaveToXML](../IStatMethod/IStatMethod.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 выгрузку настроек статистического метода в XML-код.


См. также:


[Интерфейсы сборки Stat](../Interfaces.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
