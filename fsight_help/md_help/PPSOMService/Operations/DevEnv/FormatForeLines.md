# FormatForeLines: Операция

FormatForeLines: Операция
-


**


# FormatForeLines


## Синтаксис


FormatForeLinesResult FormatForeLines(FormatForeLinesArg
 tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция FormatForeLines форматирует
 строки кода.


## Комментарии


Операция позволяет произвести форматирование строк кода путём добавления
 одиночных отступов и удаления незначимых пробелов в элементах кода. Для
 выполнения операции укажите в поле tArg.lines
 строки кода, к которым необходимо применить форматирование.


Результатом операции будут отформатированные строки кода.


## Пример


Ниже приведён пример применения форматирования к строкам кода в среде
 разработки. В запросе передаются строки кода. В ответе возвращаются строки
 кода после применения форматирования.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<FormatForeLines xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <lines>Class test:object	Function test:integer;	Begin			End Function     test;End   Class  test  ;</lines>  </tArg>
  </FormatForeLines>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<FormatForeLinesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <lines xmlns="****">Class test: object Function test: integer; Begin End Function test; End Class test;</lines>  </FormatForeLinesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "FormatForeLines" :
  {
   "tArg" :
    {
     "lines" : "Class test:object\tFunction test:integer;\tBegin\t\t\tEnd Function     test;End   Class  test  ;"
    }
  }
}

### JSON-ответ:


{
 "FormatForeLinesResult" :
  {
   "lines" : "Class test: object Function test: integer; Begin End Function test; End Class test;"
  }
}


public static FormatForeLinesResult FormatForeLines(string code)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tFormat = new FormatForeLines()
    {
        tArg = new FormatForeLinesArg()
        {
            lines = code
        }
    };
    // Форматирование строк кода
    var result = somClient.FormatForeLines(tFormat);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
