# HandleCustomObOper: Операция

HandleCustomObOper: Операция
-


**


# HandleCustomObOper


## Синтаксис


HandleCustomObOperResult HandleCustomObOper(OdId
 tObj, HandleCustomObOperArg tArg)


## Параметры


tObj. Моникёр
 открытого экземпляра объекта пользовательского класса.


tArg. Параметры выполнения
 операции.


## Описание


Операция HandleCustomObOper
 используется для выполнения пользовательской/стандартной операции для
 экземпляра объекта пользовательского класса.


## Комментарии


Для выполнения операции укажите в поле tObj
 моникёр экземпляра объекта пользовательского класса, а в поле tArg.operationId
 идентификатор пользовательской/стандартной операции класса. Моникёр может
 быть получен при выполнении операций [CreateCustomOb](CreateCustomOb.htm),
 [OpenCustomOb](OpenCustomOb.htm). Идентификатор выполняемой
 операции можно получить в метаданных пользовательского класса, которые
 могут быть получены при выполнении операций [OpenCustomExtender](OpenCustomExtender.htm),
 [GetCustomExtender](GetCustomExtender.htm).


Результатом операции HandleCustomObOper
 будет результат выполнения пользовательской/стандартной операции.


## Пример


Ниже приведён пример выполнения пользовательской операции для экземпляра
 объекта пользовательского класса. В запросе передаётся моникёр открытого
 экземпляра пользовательского объекта и идентификатор выполняемой операции.
 В ответе возвращается результат выполнения операции.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<HandleCustomObOper xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObj xmlns="****">
  <id>KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!OGJDCJCHLBNIEGOAEEJEBKIOHBNBIFPPEIIEEIAFBMGNGGONL</id>  </tObj>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <operationId>EXPORT</operationId>  </tArg>
  </HandleCustomObOper>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<HandleCustomObOperResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<webFormResult xmlns="****">
  <handlerKey>10101</handlerKey>  </webFormResult>
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!OGJDCJCHLBNIEGOAEEJEBKIOHBNBIFPPEIIEEIAFBMGNGGONL</id>  </id>
[![](../../minus.gif)](../../#)<object xmlns="****" ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>OBJ10106</i>  <n>Пользовательский объект</n>  <k>10106</k>  <c>2168577</c>  <p>10099</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </object>
  </HandleCustomObOperResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "HandleCustomObOper" :
  {
   "tObj" :
    {
     "id" : "KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!OGJDCJCHLBNIEGOAEEJEBKIOHBNBIFPPEIIEEIAFBMGNGGONL"
    },
   "tArg" :
    {
     "operationId" : "EXPORT"
    }
  }
}

### JSON-ответ:


{
 "HandleCustomObOperResult" :
  {
   "webFormResult" :
    {
     "handlerKey" : "10101"
    },
   "id" :
    {
     "id" : "KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!OGJDCJCHLBNIEGOAEEJEBKIOHBNBIFPPEIIEEIAFBMGNGGONL"
    },
   "object" :
    {
     "@ds" : "",
     "@isShortcut" : "0",
     "@isLink" : "0",
     "@ver" : "2",
     "@hf" : "0",
     "i" : "OBJ10106",
     "n" : "Пользовательский объект",
     "k" : "10106",
     "c" : "2168577",
     "p" : "10099",
     "h" : "0",
     "hasPrv" : "0",
     "ic" : "0",
     "trackElementDependents" : "0"
    }
  }
}


public static HandleCustomObOperResult HandleCustomObOper(string objMoniker, string operation)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tClose = new HandleCustomObOper()
    {
        tObj = new OdId() { id = objMoniker },
        tArg = new HandleCustomObOperArg() { operationId = operation }
    };
    // Выполнение операции для экземпляра объекта пользовательского класса
    var tResult = somClient.HandleCustomObOper(tClose);
    return tResult;
}


См. также:


[Работа
 с объектами пользовательских классов](Custom_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
