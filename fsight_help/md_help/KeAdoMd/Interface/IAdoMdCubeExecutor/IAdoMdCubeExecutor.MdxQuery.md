# IAdoMdCubeExecutor.MdxQuery

IAdoMdCubeExecutor.MdxQuery
-


# IAdoMdCubeExecutor.MdxQuery


## Синтаксис


MdxQuery: String;


## Описание


Свойство MdxQuery определяет
 произвольный MDX-запрос к кубу.


## Комментарии


После подготовки вычислителя куба, если был вызван метод [PrepareExecute](KeCubes.chm::/Interface/ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.PrepareExecute.htm), то в свойстве MdxQuery можно получить MDX-запрос,
 используемый для извлечения данных в соответствии с отметкой, которая
 была передана в метод. После выполнения метода [PerformExecute](KeCubes.chm::/Interface/ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.PerformExecute.htm)
 в свойстве [Matrix](KeCubes.chm::/Interface/ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.Matrix.htm) можно получить матрицу
 с данными куба.


Установка произвольного запроса в свойстве MdxQuery
 должна производиться до выполнения метода [PrepareExecute](KeCubes.chm::/Interface/ICubeInstanceDestinationExecutor/ICubeInstanceDestinationExecutor.PrepareExecute.htm).


Имеется ряд ограничений, накладываемых на текст указываемого MDX-запроса:


	- Ключевое слово NON EMPTY нельзя использовать в предложении оси,
	 вместо него следует использовать функцию [NonEmpty](https://msdn.microsoft.com/ru-ru/library/ms145988.aspx).
	 Функция недоступна при работе с базой данных на базе SAP NetWeaver
	 BW;


	- Условие HAVING нельзя использовать в предложении оси, вместо
	 него следует использовать функцию [Filter](https://msdn.microsoft.com/ru-ru/library/ms146037.aspx);


	- По умолчанию в подзапросах выборки запрещены вычисляемые элементы.
	 Это ограничение можно изменить путем присвоения значения «1» параметру
	 SubQueries в свойстве [IAdoMdCatalog.ProviderString](../IAdoMdCatalog/IAdoMdCatalog.ProviderString.htm).


## Пример


Пример использования приведен в описании метода [IAdoMdCubeExecutor.OpenCellset](IAdoMdCubeExecutor.OpenCellset.htm).


См. также:


[IAdoMdCubeExecutor](IAdoMdCubeExecutor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
