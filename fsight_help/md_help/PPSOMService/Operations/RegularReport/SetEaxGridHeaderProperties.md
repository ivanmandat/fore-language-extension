# SetEaxGridHeaderProperties: Операция

SetEaxGridHeaderProperties: Операция
-


**


# SetEaxGridHeaderProperties


## Синтаксис


bool SetEaxGridHeaderProperties(string mon, EaxGridHeaderProperties
 tArg)


## Параметры


mon. Моникёр
 заголовка таблицы, для которого необходимо получить свойства.


tArg. Свойства заголовка, которые
 необходимо изменить.


## Описание


Операция SetEaxGridHeaderProperties
 изменяет свойства заголовка визуализатора Таблицы.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «DataArea!Views!ключ
 таблицы!Settings!тип заголовка», в качестве типа заголовка указывается:


	- TopProp. Шапка таблицы.


	- LeftProp. Боковик таблицы.


Моникёр экземпляра регламентного отчёта может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm). В поле tArg
 задайте значения свойств, которые необходимо установить.


Результатом выполнения операции будет логическое значение true,
 если изменение свойств завершилось успешно.


## Пример


Ниже приведён пример изменения свойств боковика таблицы. В запросе передаётся
 моникёр боковика и устанавливаемые значения свойств. В ответе возвращается
 признак успешного изменения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetEaxGridHeaderProperties xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PBOIFFGDEBBGOFOAEGDIGBMJIIJJDBBDEFLPHAOFEMBCDFFIK!DataArea!Views!1!Settings!LeftProp</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <indent>true</indent>  <hierarchical>true</hierarchical>  </tArg>
  </SetEaxGridHeaderProperties>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetEaxGridHeaderPropertiesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetEaxGridHeaderPropertiesResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetEaxGridHeaderProperties" :
  {
   "mon" : "FCJKECDEBBGOFOAENKBHCHAOHGPDFHHEPJAKMBIGJNLFCJOB!M!S!PBOIFFGDEBBGOFOAEGDIGBMJIIJJDBBDEFLPHAOFEMBCDFFIK!DataArea!Views!1!Settings!LeftProp",
   "tArg" :
    {
     "indent" : "true",
     "hierarchical" : "true"
    }
  }
}

### JSON-ответ:


{
 "SetEaxGridHeaderPropertiesResult" : "1"
}


public static bool SetEaxGridHeaderProperties(string moniker, uint viewKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetEaxGridHeaderProperties()
    {
        tArg = new EaxGridHeaderProperties()
        {
            hierarchical = true,
            indent = true
        },
        mon = moniker + "!DataArea!Views!" + viewKey.ToString() + "!Settings!LeftProp"
    };
    // Изменение свойств заголовка
    var result = somClient.SetEaxGridHeaderProperties(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
