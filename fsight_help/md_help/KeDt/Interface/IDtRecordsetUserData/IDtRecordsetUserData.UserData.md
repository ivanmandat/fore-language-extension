# IDtRecordsetUserData.UserData

IDtRecordsetUserData.UserData
-


# IDtRecordsetUserData.UserData


## Синтаксис


UserData: [IXmlDomElement](ModXml.chm::/develop.htm);


## Описание


Свойство UserData определяет
 дополнительные настройки в формате XML для пользовательских источников/приёмников
 данных.


## Комментарии


Особенности работы с XML-файлами представлены на странице «[Пример работы с XML-файлами](ModXml.chm::/Samples/ModXml_Sample1.htm)».


## Пример


Подключите системные сборки: Dt, MathFin, Metabase, Xml.


			Class MyProvider: Object, IDtRecordsetProvider, IDtRecordsetUserData

    UserD: IXmlDomElement;


    Public Function Fetch: Array Of Variant;

        Var

            ResArray: Array[0..1, 0..10] Of Variant;

            i, j: integer;

        Begin

            For j := 0 To 10 Do

                For i := 0 To 1 Do

                    If i = 0 Then

                        ResArray[i, j] := "Код-" + j.ToString;

                    Else

                        ResArray[i, j] := Math.RandBetween(0, 100);

                    End If;

                End For;

            End For;

            Return ResArray;

    End Function Fetch;


    Public Function get_userData: IXmlDomElement;

        Begin

            Return UserD;

    End Function get_userData;


    Public Sub set_userData(value: IXmlDomElement);

        Begin

            UserD := value;

    End Sub set_userData;


End Class MyProvider;


Данный пример является макросом, содержащим реализацию:


	- метода, осуществляющего импорт данных по пользовательскому алгоритму.
	 При импорте будет получен массив, содержащий два столбца данных. В
	 первом столбце будут содержаться символьные значения, во втором -
	 случайные вещественные числа в диапазоне от 0 до 100;


	- свойства, определяющего дополнительные настройки в формате XML
	 для пользовательских источников/приёмников данных.


См. также:


[IDtRecordsetUserData](IDtRecordsetUserData.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
