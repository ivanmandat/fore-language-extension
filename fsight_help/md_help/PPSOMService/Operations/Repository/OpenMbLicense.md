# OpenMbLicense: Операция

OpenMbLicense: Операция
-


**


# OpenMbLicense


## Синтаксис


OpenMbLicenseResult OpenMbLicense(MbId tMb, OpenMbLicenseArg
 tArg)


## Параметры


tMb. Моникёр
 соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenMbLicense получает
 экземпляр лицензии.


## Комментарии


При работе с инструментами платформы, в большинстве случаев, лицензии
 автоматически блокируются и освобождаются на сервере лицензий. В определенных
 ситуациях, например при работе с менеджером безопасности, требуется принудительное
 получение лицензии. Для выполнения операции укажите в поле tMb
 моникёр соединения с репозиторием, а в поле tArg.featureType
 тип получаемой лицензии. Моникёр может быть получен при выполнении операции
 [OpenMetabase](OpenMetabase.htm).


Результатом выполнения операции будет моникёр полученного экземпляра
 лицензии.


Для освобождения используемого экземпляра лицензии используйте операцию
 [CloseMbLicense](CloseMbLicense.htm).


## Пример


Ниже приведён пример получения лицензии, необходимой для работы менеджера
 безопасности. В запросе передаётся моникёр соединения с репозиторием и
 тип необходимой лицензии. В ответе возвращается моникёр полученного экземпляра
 лицензии.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenMbLicense xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xmlns="****">
  <id>COCEMLBIAJABGOAEBPGPAMOAJHNNIHDENJHCPANBHHDMNFPG!M</id>  </tMb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <featureType>Adm</featureType>  </tArg>
  </OpenMbLicense>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenMbLicenseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>COCEMLBIAJABGOAEBPGPAMOAJHNNIHDENJHCPANBHHDMNFPG!M!S!MbLicHKGDFNBIAJABGOAEAHPAJBPDEDCPLHJEJKKCALFPNECMCIBB</id>  </id>
  </OpenMbLicenseResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenMbLicense" :
  {
   "tMb" :
    {
     "id" : "COCEMLBIAJABGOAEBPGPAMOAJHNNIHDENJHCPANBHHDMNFPG!M"
    },
   "tArg" :
    {
     "featureType" : "Adm"
    }
  }
}

### JSON-ответ:


{
 "OpenMbLicenseResult" :
  {
   "id" :
    {
     "id" : "COCEMLBIAJABGOAEBPGPAMOAJHNNIHDENJHCPANBHHDMNFPG!M!S!MbLicHKGDFNBIAJABGOAEAHPAJBPDEDCPLHJEJKKCALFPNECMCIBB"
    }
  }
}


public static OpenMbLicenseResult OpenMbLicense(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOp = new OpenMbLicense()
    {
        tArg = new OpenMbLicenseArg()
        {
            featureType = LicenseFeatureType.Adm
        },
        tMb = new MbId() { id = moniker }
    };
    // Получим лицензию для возможности работы с менеджером безопасности
    var result = somClient.OpenMbLicense(tOp);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
