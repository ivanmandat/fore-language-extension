# ForeExecWithState: Операция

ForeExecWithState: Операция
-


**


# ForeExecWithState


## Синтаксис


ForeExecResult ForeExecWithState(ForeId tFore, ForeExecArg
 tArg, ForeExecStateArg tStateArg)


## Параметры


tFore. Моникёр.


tArg. Параметры выполнения
 операции.


tStateArg. Параметры сохранения
 объектов на сервере состояний.


## Описание


Операция ForeExecWithState выполняет
 методы, реализованные в Fore-модулях, с последующим сохранением объектов
 на сервере состояний.


## Комментарии


Сервер состояний должен быть предварительно установлен и настроен на
 работу с BI-сервером.


Для выполнения операции необходимо в поле tFore
 указать моникёр модуля/сборки, содержащего реализацию выполняемого метода.
 Моникёр может быть получен при выполнении операции [GetObjects](GetObjects.htm).
 В поле tArg.methodName укажите
 наименование выполняемого метода, а в поле tArg.args
 значения входных параметров метода. В поле tArg.tStateArg
 задайте параметры сохранения объектов на сервере состояний.


На операцию распространяются все требования, особенности и рекомендации,
 которые имеются у операции [ForeExec](ForeExec.htm).


## Пример


Ниже приведён пример выполнения метода с передачей объектов репозитория
 в качестве значений параметров. В запросе передаётся наименование выполняемого
 метода и моникёр объекта среды разработки, содержащего его реализацию.
 В значениях параметров передаются моникёры соединения с репозиторием и
 моникёр открытого экземпляра экспресс-отчёта. После выполнения метода
 состояние экспресс-отчёта будет сохранено на сервере состояний. Выполняемый
 метод имеет следующий синтаксис:


[![](../../Opened.gif)![](../../Closed.gif)Метод](javascript:TextPopup(this))


	Function WorkWithObject(Metabase: Object; MBObj: Object): String;

	Var

	    MB: IMetabase;

	    Result: String;

	Begin

	    //Получение контекста репозитория

	    If Metabase Is IMetabase Then

	        MB := Metabase As IMetabase;

	    End If;

	    //Проверка типа второго параметра

	    If MBObj Is IEaxAnalyzer Then

	        //...

	        //Приведение к IEaxAnalyzer и работа с ним

	        //...

	    End If;

	    //...

	    //Работа с объектом

	    //...

	    Return Result;

	End Function WorkWithObject;


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ForeExecWithState xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tFore xmlns="****">
  <id>CJHOLKCMALALFOAEKGINPHCCMHHOLIHEBJLCOLDNKEKMKCKG!M!7360</id>  </tFore>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <methodName>WorkWithObject</methodName>[![](../../minus.gif)](../../#)<args>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <value>CJHOLKCMALALFOAEKGINPHCCMHHOLIHEBJLCOLDNKEKMKCKG!M</value>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <value>CJHOLKCMALALFOAEKGINPHCCMHHOLIHEBJLCOLDNKEKMKCKG!M!S!ENPDFCNCMALALFOAEBIAIIOLLHIEDGGIEAKNLNKCFNJJDEKLP</value>  </it>
  </args>
  </tArg>
[![](../../minus.gif)](../../#)<tStateArg xmlns="****">
  <saveState>true</saveState>[![](../../minus.gif)](../../#)<objectsToSave>
  <s>CJHOLKCMALALFOAEKGINPHCCMHHOLIHEBJLCOLDNKEKMKCKG!M!S!ENPDFCNCMALALFOAEBIAIIOLLHIEDGGIEAKNLNKCFNJJDEKLP</s>  </objectsToSave>
  </tStateArg>
  </ForeExecWithState>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ForeExecWithStateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****" />
  </ForeExecWithStateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ForeExecWithState" :
  {
   "tFore" :
    {
     "id" : "CJHOLKCMALALFOAEKGINPHCCMHHOLIHEBJLCOLDNKEKMKCKG!M!7360"
    },
   "tArg" :
    {
     "methodName" : "WorkWithObject",
     "args" :
      {
       "it" :
        [
          {
           "k" : "1",
           "value" : "CJHOLKCMALALFOAEKGINPHCCMHHOLIHEBJLCOLDNKEKMKCKG!M"
          },
          {
           "k" : "2",
           "value" : "CJHOLKCMALALFOAEKGINPHCCMHHOLIHEBJLCOLDNKEKMKCKG!M!S!ENPDFCNCMALALFOAEBIAIIOLLHIEDGGIEAKNLNKCFNJJDEKLP"
          }
        ]
      }
    },
   "tStateArg" :
    {
     "saveState" : "true",
     "objectsToSave" :
      {
       "s" : "CJHOLKCMALALFOAEKGINPHCCMHHOLIHEBJLCOLDNKEKMKCKG!M!S!ENPDFCNCMALALFOAEBIAIIOLLHIEDGGIEAKNLNKCFNJJDEKLP"
      }
    }
  }
}

### JSON-ответ:


{
 "ForeExecWithStateResult" :
  {
   "result" : ""
  }
}


public static ForeExecResult ExecMethodWithState(MbId mb, string assmId, string methodName, string objMoniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tExec = new ForeExecWithState()
    {
        tArg = new ForeExecArg()
        {
            methodName = methodName,
            // Моникёры в качестве значений параметров
            args = new OdArg[2]
            {
                new OdArg(){ k = 1, value = mb.id },
                new OdArg(){ k = 2, value = objMoniker }
            }
        },
        // Моникёр объекта среды разработки с реализацией метода
        tFore = new ForeId()
        {
            id = mb.id + "!" + FindObjectById(mb, assmId).k
        },
        tStateArg = new ForeExecStateArg()
        {
            saveState = true,
            objectsToSave = new string[] { objMoniker }
        }
    };
    // Выполнение метода и сохранение состояния объекта
    var result = somClient.ForeExecWithState(tExec);
    return result;
}


См. также:


[Специфические
 операции](Specific_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
