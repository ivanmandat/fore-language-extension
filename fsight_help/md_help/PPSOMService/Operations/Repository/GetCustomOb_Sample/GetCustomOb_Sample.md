# Получение информации об объекте пользовательского класса: Операция GetCustomOb

Получение информации об объекте пользовательского класса: Операция GetCustomOb
-


**


# Получение информации об объекте пользовательского класса


Ниже приведён пример использования операции [GetCustomOb](../GetCustomOb.htm)
 для получения информации об объекте пользовательского класса. В запросе
 передаётся моникёр объекта и шаблон, в соответствии с которым извлекается
 информация: запрашиваются все данные об объекте, кроме пиктограмм. В ответе
 приходит полученная информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetCustomOb xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCustomOb xmlns="****">
  <id>LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!S!TGHNHGJAHAHHCGOAENBPOBGJCGMEKKAFEILDEOPPCHPKFAHNO</id>  </tCustomOb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <all>true</all>  <execHandler>Default</execHandler>[![](../../../minus.gif)](../../../#)<customClass>
  <smallImage>false</smallImage>  <largeImage>false</largeImage>  </customClass>
  </pattern>
  </tArg>
  </GetCustomOb>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetCustomObResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!S!TGHNHGJAHAHHCGOAENBPOBGJCGMEKKAFEILDEOPPCHPKFAHNO</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>CUST_OBJ</i>  <n>Обработчик данных</n>  <k>38194</k>  <c>71425</c>  <p>38193</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<data>
[![](../../../minus.gif)](../../../#)<refs>
  <its />
  </refs>
  <content />
  </data>
  <handlerResult />
[![](../../../minus.gif)](../../../#)<classes>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it ic="**0**">
  <k>1</k>  <id>WORKER</id>  <n>Обработчик данных</n>  <vis>1</vis>  <implURL />
[![](../../../minus.gif)](../../../#)<operations>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>CLS1OP1</id>  <n>Импорт</n>  <vis>1</vis>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>CLS1OP2</id>  <n>Экспорт</n>  <vis>1</vis>  </it>
  </its>
  </operations>
  <c>71425</c>  <h>0</h>  </it>
  </its>
  </classes>
  </meta>
  </GetCustomObResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetCustomOb" :
  {
   "tCustomOb" :
    {
     "id" : "LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!S!TGHNHGJAHAHHCGOAENBPOBGJCGMEKKAFEILDEOPPCHPKFAHNO"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "all" : "true",
       "execHandler" : "Default",
       "customClass" :
        {
         "smallImage" : "false",
         "largeImage" : "false"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetCustomObResult" :
  {
   "id" :
    {
     "id" : "LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!S!TGHNHGJAHAHHCGOAENBPOBGJCGMEKKAFEILDEOPPCHPKFAHNO"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "1",
         "@hf" : "0",
         "i" : "CUST_OBJ",
         "n" : "Обработчик данных",
         "k" : "38194",
         "c" : "71425",
         "p" : "38193",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "data" :
      {
       "refs" :
        {
         "its" : ""
        },
       "content" : ""
      },
     "handlerResult" : "",
     "classes" :
      {
       "its" :
        {
         "it" :
          [
            {
             "@ic" : "0",
             "k" : "1",
             "id" : "WORKER",
             "n" : "Обработчик данных",
             "vis" : "1",
             "implURL" : "",
             "operations" :
              {
               "its" :
                {
                 "it" :
                  [
                    {
                     "k" : "1",
                     "id" : "CLS1OP1",
                     "n" : "Импорт",
                     "vis" : "1"
                    },
                    {
                     "k" : "2",
                     "id" : "CLS1OP2",
                     "n" : "Экспорт",
                     "vis" : "1"
                    }
                  ]
                }
              },
             "c" : "71425",
             "h" : "0"
            }
          ]
        }
      }
    }
  }
}


public static GetCustomObResult GetCustomObjectInfo(CustomObId moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetCustomOb()
    {
        tArg = new GetCustomObArg()
        {
            pattern = new CustomObMdPattern()
            {
                all = true,
                customClass = new CustomClassPattern()
                {
                    largeImage = false,
                    smallImage = false
                },
                execHandler = CustomObHandlerType.Default
            }
        },
        tCustomOb = moniker
    };
    // Получение информации по объекту пользовательского класса
    var tResult = somClient.GetCustomOb(tGet);
    return tResult;
}


См. также:


[GetCustomOb:
 Операция](../GetCustomOb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
