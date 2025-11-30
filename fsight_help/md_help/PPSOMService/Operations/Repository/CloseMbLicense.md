# CloseMbLicense: Операция

CloseMbLicense: Операция
-


**


# CloseMbLicense


## Синтаксис


bool CloseMbLicense(MbLicenseId tMbLicense)


## Параметры


tMbLicense. Моникёр
 экземпляра лицензии.


## Описание


Операция CloseMbLicense освобождает
 экземпляр лицензии.


## Комментарии


Для выполнения операции укажите в поле tMbLicense
 моникёр экземпляра лицензии, которую необходимо освободить. Моникёр может
 быть получен при выполнении операции [OpenMbLicense](OpenMbLicense.htm).


Результатом выполнения операции будет логическое значение true,
 если освобождение лицензии завершилось успешно.


## Пример


Ниже приведён пример освобождения экземпляра лицензии. В запросе передаётся
 моникёр экземпляра лицензии. В ответе возвращается признак успешного освобождения.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseMbLicense xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbLicense xmlns="****">
  <id>COCEMLBIAJABGOAEBPGPAMOAJHNNIHDENJHCPANBHHDMNFPG!M!S!MbLicHKGDFNBIAJABGOAEAHPAJBPDEDCPLHJEJKKCALFPNECMCIBB</id>  </tMbLicense>
  </CloseMbLicense>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseMbLicenseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseMbLicenseResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseMbLicense" :
  {
   "tMbLicense" :
    {
     "id" : "COCEMLBIAJABGOAEBPGPAMOAJHNNIHDENJHCPANBHHDMNFPG!M!S!MbLicHKGDFNBIAJABGOAEAHPAJBPDEDCPLHJEJKKCALFPNECMCIBB"
    }
  }
}

### JSON-ответ:


{
 "CloseMbLicenseResult" : "1"
}


public static bool CloseMbLicense(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseMbLicense()
    {
        tMbLicense = new MbLicenseId() { id = moniker }
    };
    // Закрытие экземпляра лицензии
    var result = somClient.CloseMbLicense(tClose);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
