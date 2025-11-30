# GetCurrentBreakLine: Операция

GetCurrentBreakLine: Операция
-


**


# GetCurrentBreakLine


## Синтаксис


GetCurrentBreakLineResult GetCurrentBreakLine(OdId
 tObject)


## Параметры


tObject. Моникёр
 модуля, в котором осуществляется отладка кода.


## Описание


Операция GetCurrentBreakLine
 получает информацию о строке, в которой сработала точка останова.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр объекта, находящегося в режиме отладки.


Результатом операции будет информация о точке останова, в которой было
 прервано выполнение кода.


## Пример


Ниже приведён пример получения информации о строке, в которой произошло
 прерывание кода в точке останова. В запросе передаётся моникёр модуля,
 запущенного в режиме отладки. В ответе возвращается информация о точке
 останова.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetCurrentBreakLine xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490</id>  </tObject>
  </GetCurrentBreakLine>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetCurrentBreakLineResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<bp xmlns="****">
  <moduleKey>302490</moduleKey>  <moduleName>M_DEBUG</moduleName>  <lineNumber>16</lineNumber>  <enabled>1</enabled>  <passCount>1</passCount>[![](../../minus.gif)](../../#)<meta>
  <text>Sub Main;
Var
	ci: ICultureInfo;
	i: Integer;
	t1: DateTime;
	t2: TimeSpan;
Begin
	ci := CultureInfo.Invariant;
	t1 := DateTime.Now;
	Debug.WriteLine("Приложение запущено. Время запуска: " + ci.FormatTimeEx(t1, "HH:mm") + '.');
	For i := 0 To 50000000 Do
		/// <summary>
		///Действие со многими итерациями
		/// </summary>
	End For;
	t2 := DateTime.Now - t1;
	Debug.WriteLine("Выполнение завершено.");
	Debug.WriteLine("Время выполнения: " + t2.TotalSeconds.ToString + " секунд.");
End Sub Main;</text>[![](../../minus.gif)](../../#)<references>
  <builtinReferences />
  <repoReferences />
  </references>
[![](../../minus.gif)](../../#)<desc ds="****" isShortcut="**0**" isLink="**0**" ver="**21**" hf="**0**">
  <i>M_DEBUG</i>  <n>Отладка приложения</n>  <k>302490</k>  <c>1537</c>  <p>171999</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </desc>
  </meta>
  </bp>
  </GetCurrentBreakLineResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetCurrentBreakLine" :
  {
   "tObject" :
    {
     "id" : "CDFENMHJDPDCGOAEFECMBDAOCBFPPLDEHJLFMBPLOGEOFKMJ!M!302490"
    }
  }
}

### JSON-ответ:


{
 "GetCurrentBreakLineResult" :
  {
   "bp" :
    {
     "moduleKey" : "302490",
     "moduleName" : "M_DEBUG",
     "lineNumber" : "16",
     "enabled" : "1",
     "passCount" : "1",
     "meta" :
      {
       "text" : "Sub Main;
Var
\tci: ICultureInfo;
\ti: Integer;
\tt1: DateTime;
\tt2: TimeSpan;
Begin
\tci := CultureInfo.Invariant;
\tt1 := DateTime.Now;
\tDebug.WriteLine("Приложение запущено. Время запуска: " + ci.FormatTimeEx(t1, "HH:mm") + '.');
\tFor i := 0 To 50000000 Do
\t\t\/\/\/ <summary>
\t\t\/\/\/Действие со многими итерациями
\t\t\/\/\/ <\/summary>
\tEnd For;
\tt2 := DateTime.Now - t1;
\tDebug.WriteLine("Выполнение завершено.");
\tDebug.WriteLine("Время выполнения: " + t2.TotalSeconds.ToString + " секунд.");
End Sub Main;",
       "references" :
        {
         "builtinReferences" : "",
         "repoReferences" : ""
        },
       "desc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "21",
         "@hf" : "0",
         "i" : "M_DEBUG",
         "n" : "Отладка приложения",
         "k" : "302490",
         "c" : "1537",
         "p" : "171999",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0"
        }
      }
    }
  }
}


public static GetCurrentBreakLineResult GetCurrentBreakLine(MbId mb, string modId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetCurrentBreakLine()
    {
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, modId).k }
    };
    // Получение информации о месте последнего прерывания выполнения кода
    var result = somClient.GetCurrentBreakLine(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
