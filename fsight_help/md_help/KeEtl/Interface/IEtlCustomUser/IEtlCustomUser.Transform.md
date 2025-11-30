# IEtlCustomUser.Transform

IEtlCustomUser.Transform
-


# IEtlCustomUser.Transform


## Синтаксис


Transform(Inputs: [IEtlPlainRecordSets](../IEtlPlainRecordSets/IEtlPlainRecordSets.htm);
 Outputs: [IEtlPlainRecordSets](../IEtlPlainRecordSets/IEtlPlainRecordSets.htm));


## Параметры


Inputs. Входы преобразователя
 на основе пользовательского алгоритма;


Outputs. Выходы преобразователя
 на основе пользовательского алгоритма.


## Описание


Метод Transform выполняет преобразование
 данных в [алгоритме пользователя](../../Samples/User_Algorithm.htm).


## Комментарии


Для чтения данных в формате XML используйте метод [IEtlCustomUser.Read](IEtlCustomUser.Read.htm).


## Пример


Добавьте ссылки на системные сборки: Etl, Xml.


	Public Class CUserAlgSimple: Object, IEtlCustomUser

	    Public Sub Transform(Input: IEtlPlainRecordSets; Output: IEtlPlainRecordSets);

	    Var

	        RecordSetIn, RecordSetOut: IEtlPlainRecordSet;

	        i, j, k: Integer;

	    Begin

	        For i := 0 To input.Count - 1 Do

	        RecordSetIn := Input.Item(i);

	        RecordSetOut := Output.Item(i);

	        For j := 0 To RecordSetIn.Count - 1 Do

	            RecordSetOut.Add;

	            For k := 0 To RecordSetIn.Item(j).Count - 1 Do

	                RecordSetOut.Item(j).Value(k) := 1;

	            End For;

	        End For;

	        End For;

	    End Sub Transform;


	    Public Sub Read(pNode: IXMLDOMElement);

	    Begin

	        Debug.WriteLine("Read from CUserAlgSimple");

	        Debug.WriteLine(pNode.xml);

	    End Sub Read;

	End Class CUserAlgSimple;


Данный пример является макросом, содержащим реализацию:


	- метода для чтения данных в формате XML;


	- метода для преобразования данных в алгоритме пользователя.


См. также:


[IEtlCustomUser](IEtlCustomUser.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
