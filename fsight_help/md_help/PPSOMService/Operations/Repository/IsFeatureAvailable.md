# IsFeatureAvailable: Операция

IsFeatureAvailable: Операция
-


**


# IsFeatureAvailable


## Синтаксис


AvailableFeature IsFeatureAvailable(AvailableFeature
 available)


## Параметры


available. Список
 функций, возможность выполнения которых необходимо проверить.


## Описание


Операция IsFeatureAvailable
 проверяет возможность выполнения какой-либо функции в платформе.


## Комментарии


Для выполнения операции укажите в поле available
 пустые значения или значения по умолчанию для тех полей, значения которых
 необходимо получить.


Результатом выполнения операции будет список флажков, указывающих возможность
 выполнения заданных функций в платформе.


## Пример


Ниже приведён пример получения информации о возможности экспорта в формат
 PDF.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<IsFeatureAvailable xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<available xmlns="****">
  <pdf>false</pdf>  </available>
  </IsFeatureAvailable>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<IsFeatureAvailableResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <pdf xmlns="****">1</pdf>  </IsFeatureAvailableResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "IsFeatureAvailable" :
  {
   "available" :
    {
     "pdf" : "false"
    }
  }
}

### JSON-ответ:


{
 "IsFeatureAvailableResult" :
  {
   "pdf" : "1"
  }
}


public static AvailableFeature IsFeatureAvailable()
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new IsFeatureAvailable()
    {
        available = new AvailableFeature()
        {
            pdf = new Boolean()
        }
    };
    //Получение информации о возможности экспорта в формат PDF
    var result = somClient.IsFeatureAvailable(tGet);
    return result;
}


См. также:


[Специфические
 операции](Specific_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
