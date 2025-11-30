# IEtlCustomCodeBlock.Execute

IEtlCustomCodeBlock.Execute
-


# IEtlCustomCodeBlock.Execute


## Синтаксис


Execute;


## Описание


Метод Execute запускает выполнение
 пользовательской процедуры.


## Комментарии


Метод будет запущен во время выполнения пользовательской процедуры в
 задаче ETL. В реализации данного метода указывается код, который должна
 выполнять процедура для обработки данных.


## Пример


Указанный пример является классом, в котором переопределены методы пользовательской
 процедуры. Указанный класс в дальнейшем может быть использован в шаблоне
 для пользовательских процедур.


Добавьте ссылки на системные сборки: Etl, XML.


	Class UserProcedure: Object, IEtlCustomCodeBlock

	    Sub Execute;

	    Begin

	        Debug.WriteLine("Execute...");

	        //...

	        //Реализация пользовательской процедуры или вызов кода с алгоритмом процедуры

	        //...

	    End Sub Execute;


	    Sub Read(Element: IXMLDOMElement);

	    Begin

	        Debug.WriteLine("Read...");

	        If Element <> Null Then

	            Debug.WriteLine("Element: " + Element.xml);

	        End If;

	    End Sub Read;

	End Class UserProcedure;


См. также:


[IEtlCustomCodeBlock](IEtlCustomCodeBlock.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
