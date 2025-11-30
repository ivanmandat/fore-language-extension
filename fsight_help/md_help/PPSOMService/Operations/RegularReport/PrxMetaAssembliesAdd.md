# PrxMetaAssembliesAdd: Операция

PrxMetaAssembliesAdd: Операция
-


**


# PrxMetaAssembliesAdd


## Синтаксис


OpItemKey PrxMetaAssembliesAdd(string mon, OdId
 tObject)


## Параметры


mon. Моникёр
 для работы с модулями, используемыми в регламентном отчёте.


tObject. Моникёр добавляемого
 модуля.


## Описание


Операция PrxMetaAssembliesAdd
 добавляет модуль среды разработки в список модулей, используемых в регламентном
 отчёте.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Assemblies» для
 работы с модулями отчёта, а в поле tObject
 моникёр добавляемого модуля.


Моникёр отчёта может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Моникёр модуля может быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).


Результатом операции будет ключ добавленного модуля в списке используемых
 в отчёте модулей.


## Пример


Ниже приведён пример добавления модуля в список модулей, используемых
 в регламентном отчёте. В запросе передаётся моникёр для работы с модулями
 в регламентном отчёте и моникёр добавляемого модуля. В ответе приходит
 ключ добавленного модуля в списке модулей.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaAssembliesAdd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">HANNJOPNPCELFOAEJFGPFOPFEEHICAPEBIMHOPKGAAKDKPMF!M!S!PCFKKIAAOPCELFOAEOGBMLBELLHDGNIIEELCKLGJENJDHJKKA!Assemblies</mon>[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>HANNJOPNPCELFOAEJFGPFOPFEEHICAPEBIMHOPKGAAKDKPMF!M!300110</id>  </tObject>
  </PrxMetaAssembliesAdd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<PrxMetaAssembliesAddResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <k xmlns="****">1</k>  </PrxMetaAssembliesAddResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaAssembliesAdd" :
  {
   "mon" : "HANNJOPNPCELFOAEJFGPFOPFEEHICAPEBIMHOPKGAAKDKPMF!M!S!PCFKKIAAOPCELFOAEOGBMLBELLHDGNIIEELCKLGJENJDHJKKA!Assemblies",
   "tObject" :
    {
     "id" : "HANNJOPNPCELFOAEJFGPFOPFEEHICAPEBIMHOPKGAAKDKPMF!M!300110"
    }
  }
}

### JSON-ответ:


{
 "PrxMetaAssembliesAddResult" :
  {
   "k" : "1"
  }
}


public static OpItemKey AddModule(string moniker, string modMoniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tAdd = new PrxMetaAssembliesAdd()
    {
        tObject = new OdId() { id = modMoniker },
        mon = moniker + "!Assemblies"
    };
    //Добаление нового листа
    var result = somClient.PrxMetaAssembliesAdd(tAdd);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
