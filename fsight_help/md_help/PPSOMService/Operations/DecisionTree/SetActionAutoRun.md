# SetActionAutoRun: Операция

SetActionAutoRun: Операция
-


**


# SetActionAutoRun


## Синтаксис


SetActionAutoRunResult SetActionAutoRun(string mon,
 SetActionAutoRunArg tArg)


## Параметры


mon. Моникёр
 действия, которое выполняет Fore-модуль.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetActionAutoRun устанавливает
 признак автоматического запуска действия.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра дерева решений с постфиксом «!Blocks!<идентификатор
 действия>» для работы с действием. Моникёр может быть получен
 при выполнении операции [OpenDecisionTree](OpenDecisionTree.htm).
 В поле tArg.value определите,
 будет ли действие выполняться автоматически, если путь выполнения дерева
 решений проходит через это действие.


Результатом выполнения операции будет признак успешного применения изменений.


## Пример


Ниже приведён пример отключения опции автоматического выполнения действия.
 В запросе передаётся моникёр действия. В ответе возвращается признак успешного
 изменения настроек.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetActionAutoRun xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <value>false</value>  </tArg>
  </SetActionAutoRun>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetActionAutoRunResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">1</result>  </SetActionAutoRunResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetActionAutoRun" :
  {
   "mon" : "JIJEMMLBHPKMFOAENJNMLBDIBBLEGCLEGLCAFJIMHPLMNCGB!M!S!CHLKDINLBHPKMFOAEONBBMJDFCKDJGEOEJLJDMIPLDDGAPCJO!Blocks!DT2E6F88D77C3A483CBE342FE22E84D67D",
   "tArg" :
    {
     "value" : "false"
    }
  }
}

### JSON-ответ:


{
 "SetActionAutoRunResult" :
  {
   "result" : "1"
  }
}


public static SetActionAutoRunResult SetOffAutoRun(string treeMoniker, string actionBlockID)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetActionAutoRun()
    {
        mon = treeMoniker + "!Blocks!" + actionBlockID,
        tArg = new SetActionAutoRunArg()
        {
            value = false
        }
    };
    // Отключение автоматического запуска действия
    var result = somClient.SetActionAutoRun(tSet);
    return result;
}


См. также:


[Работа
 с деревом решений](DecisionTree_Operations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
