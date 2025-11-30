# IDtTextProvider.DelimitedColumnDelimiters

IDtTextProvider.DelimitedColumnDelimiters
-


# IDtTextProvider.DelimitedColumnDelimiters


## Синтаксис


DelimitedColumnDelimiters: Array;


## Описание


Свойство DelimitedColumnDelimiters
 определяет массив строк, используемый в качестве разделителей полей в
 текстовом файле.


## Комментарии


В качестве элементов массива допустимы следующие значения:


	- ,


	- ;


	- .


	- :


	- |


	- {Табуляция} - код #9


	- {Возврат каретки} - код #13


	- {Перевод строки} - код #10


	- {Возврат каретки}{Перевод строки} - #13+#10


	- Любой другой символ, либо сочетание символов, по желанию
	 пользователя.


Если какой-либо символ из массива будет совпадать со значением свойства
 [DelimitedTextQualifier](IDtTextProvider.DelimitedTextQualifier.htm)
 или [RowDelimiter](IDtTextProvider.RowDelimiter.htm), то он
 не будет учитываться в качестве разделителя полей.


## Пример


Для выполнения примера предполагается наличие текстового файла «C:\Test.txt».
 В данном файле присутствуют четыре поля, разделенные символами «;», «:»
 и «!».


[![](../../opened.gif)![](../../closed.gif)Текст файла
 «C:\Test.txt», для которого написан пример](javascript:TextPopup(this))


	"Numb";"Name":"Dt_start"!"Dt_End"


	1;"Paris":"1998"!"2009"


	2;"London":"2000"!"2001"


	3;"Perm":"2005"!"2010"


			Sub UserProc;

Var

    TextProv: IDtTextProvider;

    TextCons: IDtTextConsumer;

    DelimArr: Array[0..2] Of String;

Begin

    TextProv := New DtTextProvider.Create;

    TextCons := New DtTextConsumer.Create;

    TextProv.File := "C:\Test.txt";

    TextProv.RangeHasHeader := True;

    DelimArr[0] := ";";

    DelimArr[1] := ":";

    DelimArr[2] := "!";

    TextProv.DelimitedColumnDelimiters := DelimArr;

    TextProv.GetFieldsFromFile;

    TextCons.File := "C:\Test_result.txt";

    TextCons.WriteHeader := True;

    TextCons.Fields.Add;

    TextCons.Fields.Add;

    TextCons.Fields.Add;

    TextCons.Fields.Add;

    TextCons.PutProvider(TextProv);

End UserProc;


После выполнения примера данные из файла «C:\Test.txt» будут выгружены
 в файл «C:\Test_result.txt», разделителем полей в данном файле будет символ
 «,».


[![](../../opened.gif)![](../../closed.gif)Текст файла
 «C:\Test_result.txt», который получен после выполнения примера](javascript:TextPopup(this))


	"FIELD0","FIELD1","FIELD2","FIELD3"


	"1","Paris","1998","2009"


	"2","London","2000","2001"


	"3","Perm","2005","2010"


См. также:


[IDtTextProvider](IDtTextProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
