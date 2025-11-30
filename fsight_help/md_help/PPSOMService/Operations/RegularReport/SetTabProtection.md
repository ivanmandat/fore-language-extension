# SetTabProtection: Операция

SetTabProtection: Операция
-


**


# SetTabProtection


## Синтаксис


SetTabProtectionResult SetTabProtection(TabSheetId
 tTabSheet, TabProtectionExArg tArg)


## Параметры


tTabSheet. Моникёр
 таблицы листа.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetTabProtection изменяет
 защиту таблицы листа регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы, а в поле tArg
 устанавливаемые параметры защиты. Моникёр указывается в следующем формате:
 Моникёр экземпляра регламентного отчёта!Ключ
 листа. Для снятия защиты в поле tArg.protection
 укажите значение, которое не содержит элемент, отвечающий за активацию
 (элемент со значением 1).


Результатом выполнения операции будет логическое значение, указывающее,
 изменилась ли защита таблицы листа.


## Пример


Ниже приведён пример установки защиты на таблицу листа регламентного
 отчёта. В запросе передаётся моникёр листа, требуемый уровень защиты и
 пароль. В ответе возвращается признак успешного изменения защиты.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetTabProtection xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTabSheet xmlns="****">
  <id>NIKLFCDENADGGOAEENCHFLADKBGCAHKEIJNDAILBBLMMBJMM!M!S!POJMOCFDENADGGOAELFPMGJIFMKJKLIFEMIAAHNPBJKILIHJL!Sheets!2</id>  </tTabSheet>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <protection>33</protection>  <password>password</password>  </tArg>
  </SetTabProtection>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetTabProtectionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <isSuccessful xmlns="****">1</isSuccessful>  </SetTabProtectionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetTabProtection" :
  {
   "tTabSheet" :
    {
     "id" : "NIKLFCDENADGGOAEENCHFLADKBGCAHKEIJNDAILBBLMMBJMM!M!S!POJMOCFDENADGGOAELFPMGJIFMKJKLIFEMIAAHNPBJKILIHJL!Sheets!2"
    },
   "tArg" :
    {
     "protection" : "33",
     "password" : "password"
    }
  }
}

### JSON-ответ:


{
 "SetTabProtectionResult" :
  {
   "isSuccessful" : "1"
  }
}


public static SetTabProtectionResult SetTabProtection(string moniker, string sheetKey, string secPassword)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetTabProtection()
    {
        tArg = new TabProtectionExArg()
        {
            password = secPassword,
            protection = 33 // Защита активирована (1) + Разрешение редактирования объектов таблицы (32)
        },
        tTabSheet = new TabSheetId() { id = moniker + "!Sheets!" + sheetKey }
    };
    // Установка защиты листа
    var result = somClient.SetTabProtection(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
