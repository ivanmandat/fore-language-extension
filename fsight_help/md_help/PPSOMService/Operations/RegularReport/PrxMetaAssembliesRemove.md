# PrxMetaAssembliesRemove: Операция

PrxMetaAssembliesRemove: Операция
-


**


# PrxMetaAssembliesRemove


## Синтаксис


bool PrxMetaAssembliesRemove(string mon, OpItemKey
 tArg)


## Параметры


mon. Моникёр
 для работы с модулями, используемыми в регламентном отчёте.


tArg. Ключ модуля, удаляемого
 из списка используемых в регламентном отчёте.


## Описание


Операция PrxMetaAssembliesRemove
 удаляет модуль из списка модулей, используемых в регламентном отчёте.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Assemblies» для
 работы с модулями отчёта, а в поле tObject
 моникёр добавляемого модуля.


Моникёр отчёта может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Ключ модуля можно получить в метаданных регламентного отчёта, в поле
 meta.assemblies.


Результатом операции будет логическое значение true,
 если удаление модуля из списка используемых завершилось успешно.


## Пример


Ниже приведён пример удаления модуля из списка модулей, используемых
 в регламентном отчёте. В запросе передаётся моникёр для работы с модулями
 в регламентном отчёте и ключ удаляемого модуля. В ответе возвращается
 признак удачного удаления.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaAssembliesRemove xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">HANNJOPNPCELFOAEJFGPFOPFEEHICAPEBIMHOPKGAAKDKPMF!M!S!PCFKKIAAOPCELFOAEOGBMLBELLHDGNIIEELCKLGJENJDHJKKA!Assemblies</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <k>1</k>  </tArg>
  </PrxMetaAssembliesRemove>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaAssembliesRemoveResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaAssembliesRemoveResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaAssembliesRemove" :
  {
   "mon" : "HANNJOPNPCELFOAEJFGPFOPFEEHICAPEBIMHOPKGAAKDKPMF!M!S!PCFKKIAAOPCELFOAEOGBMLBELLHDGNIIEELCKLGJENJDHJKKA!Assemblies",
   "tArg" :
    {
     "k" : "1"
    }
  }
}

### JSON-ответ:


{
 "PrxMetaAssembliesRemoveResult" : "1"
}


public static bool RemoveModule(string moniker, uint modKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tDel = new PrxMetaAssembliesRemove()
    {
        tArg = new OpItemKey() { k = modKey },
        mon = moniker + "!Assemblies"
    };
    //Удаление листа
    var result = somClient.PrxMetaAssembliesRemove(tDel);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
