# GetEaxGridHeaderProperties: Операция

GetEaxGridHeaderProperties: Операция
-


**


# GetEaxGridHeaderProperties


## Синтаксис


EaxGridHeaderProperties GetEaxGridHeaderProperties(string
 mon, EaxGridHeaderProperties tArg)


## Параметры


mon. Моникёр
 заголовка таблицы, для которого необходимо получить свойства.


tArg. Свойства заголовка, которые
 необходимо получить.


## Описание


Операция GetEaxGridHeaderProperties
 получает свойства заголовка визуализатора Таблицы.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «DataArea!Views!ключ
 таблицы!Settings!тип заголовка», в качестве типа заголовка указывается:


	- TopProp. Шапка таблицы.


	- LeftProp. Боковик таблицы.


Моникёр экземпляра регламентного отчёта может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm). В поле tArg
 задайте пустые значения или значения по умолчанию для тех полей, значения
 которых необходимо получить.


Результатом операции будут полученные свойства заголовка таблицы.


## Пример


Ниже приведён пример получения свойств боковика таблицы. В запросе передаётся
 моникёр боковика и список получаемых свойств. В ответе возвращаются полученные
 значения свойств.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetEaxGridHeaderProperties xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PBOIFFGDEBBGOFOAEGDIGBMJIIJJDBBDEFLPHAOFEMBCDFFIK!DataArea!Views!1!Settings!LeftProp</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <indent>false</indent>  <hierarchical>false</hierarchical>  </tArg>
  </GetEaxGridHeaderProperties>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetEaxGridHeaderPropertiesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <indent xmlns="****">1</indent>  <hierarchical xmlns="****">1</hierarchical>  </GetEaxGridHeaderPropertiesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetEaxGridHeaderProperties" :
  {
   "mon" : "FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PBOIFFGDEBBGOFOAEGDIGBMJIIJJDBBDEFLPHAOFEMBCDFFIK!DataArea!Views!1!Settings!LeftProp",
   "tArg" :
    {
     "indent" : "false",
     "hierarchical" : "false"
    }
  }
}

### JSON-ответ:


{
 "GetEaxGridHeaderPropertiesResult" :
  {
   "indent" : "1",
   "hierarchical" : "1"
  }
}


public static EaxGridHeaderProperties GetEaxGridHeaderProperties(string moniker, uint viewKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetEaxGridHeaderProperties()
    {
        tArg = new EaxGridHeaderProperties()
        {
            hierarchical = new bool(),
            indent = new bool()
        },
        mon = moniker + "!DataArea!Views!" + viewKey.ToString() + "!Settings!LeftProp"
    };
    // Получение свойств заголовка
    var result = somClient.GetEaxGridHeaderProperties(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
