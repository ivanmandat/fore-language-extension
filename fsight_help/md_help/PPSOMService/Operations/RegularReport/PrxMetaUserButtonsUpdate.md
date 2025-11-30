# PrxMetaUserButtonsUpdate: Операция

PrxMetaUserButtonsUpdate: Операция
-


**


# PrxMetaUserButtonsUpdate


## Синтаксис


bool PrxMetaUserButtonsUpdate(string mon, PrxMetaUserButtonUpdateActions
 tArg)


## Параметры


mon. Моникёр
 для работы с пользовательскими кнопками.


tArg. Параметры выполнения
 операции.


## Описание


Операция PrxMetaUserButtonsUpdate
 обновляет коллекцию пользовательских кнопок в регламентном отчёте.


## Комментарии


Операция позволяет обновить настройки пользовательских кнопок, создать
 новые или удалить существующие пользовательские кнопки. Для выполнения
 операции укажите в поле mon моникёр
 открытого экземпляра регламентного отчёта с постфиксом «!UserButtons»,
 а в поле tArg.its коллекцию элементов
 с информацией о выполняемых действиях с пользовательскими кнопками.


Если осуществляется удаление пользовательской кнопки, то в настройках
 выполняемого действия укажите ключ кнопки. При создании/обновлении пользовательских
 кнопок указываются все необходимые настройки.


Результатом выполнения операции будет логическое значение true,
 если обновление коллекции пользовательских кнопок завершилось успешно.


## Пример


Ниже приведён пример обновления настроек пользовательской кнопки и создания
 новой пользовательской кнопки в регламентном отчёте. В запросе передаётся
 моникёр для работы с пользовательскими кнопками и коллекция элементов
 с необходимыми настройками для выполнения указанных действий. В ответе
 возвращается признак успешного изменения коллекции пользовательских кнопок.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxMetaUserButtonsUpdate xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">JODKPOHMDJDAGOAEDJEGAHKDCGKLNBKELJDOLPPMKPDKLOBJ!M!S!PPPOIKAIMDJDAGOAEJMPKOFKAHPDEMIFECIIMIGJAMMBGHKDB!UserButtons</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <action>Update</action>[![](../../minus.gif)](../../#)<button>
  <k>1</k>  <n>Настройка</n>  </button>
  </it>
[![](../../minus.gif)](../../#)<it>
  <action>Add</action>[![](../../minus.gif)](../../#)<button>
  <k>5</k>  <n>Создать</n>  <type>Method</type>[![](../../minus.gif)](../../#)<foreModule>
  <i>OBJ339238</i>  <n>Модуль</n>  <k>339238</k>  <c>0</c>  </foreModule>
[![](../../minus.gif)](../../#)<action>
[![](../../minus.gif)](../../#)<method>
  <foreMethod>NewObject</foreMethod>  </method>
  </action>
  </button>
  </it>
  </its>
  </tArg>
  </PrxMetaUserButtonsUpdate>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <PrxMetaUserButtonsUpdateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</PrxMetaUserButtonsUpdateResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxMetaUserButtonsUpdate" :
  {
   "mon" : "JODKPOHMDJDAGOAEDJEGAHKDCGKLNBKELJDOLPPMKPDKLOBJ!M!S!PPPOIKAIMDJDAGOAEJMPKOFKAHPDEMIFECIIMIGJAMMBGHKDB!UserButtons",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "action" : "Update",
           "button" :
            {
             "k" : "1",
             "n" : "Настройка"
            }
          },
          {
           "action" : "Add",
           "button" :
            {
             "k" : "5",
             "n" : "Создать",
             "type" : "Method",
             "foreModule" :
              {
               "i" : "OBJ339238",
               "n" : "Модуль",
               "k" : "339238",
               "c" : "0"
              },
             "action" :
              {
               "method" :
                {
                 "foreMethod" : "NewObject"
                }
              }
            }
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "PrxMetaUserButtonsUpdateResult" : "1"
}


public static bool PrxMetaUserButtonsUpdate(MbId mb, string moniker, string moduleId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    var moduleOd = FindObjectById(mb, moduleId);
    // Параметры выполнения операции
    var tChange = new PrxMetaUserButtonsUpdate()
    {
        mon =  moniker + "!UserButtons",
        tArg = new PrxMetaUserButtonUpdateActions()
        {
            its = new PrxMetaUserButtonUpdateAction[]
            {
                new PrxMetaUserButtonUpdateAction()
                {
                    action = PrxMetaUserButtonUpdateActionType.Update,
                    button = new PrxMetaUserButton()
                    {
                        k = 1,
                        n = "Настройка"
                    }
                },
                new PrxMetaUserButtonUpdateAction()
                {
                    action = PrxMetaUserButtonUpdateActionType.Add,
                    button = new PrxMetaUserButton()
                    {
                        k = 5,
                        n = "Создать",
                        foreModule = new Ob()
                        {
                            i = moduleId,
                            n = moduleOd.n,
                            k = moduleOd.k
                        },
                        type = PrxMetaUserButtonType.Method,
                        action = new PrxMetaUserButtonAction()
                        {
                            method = new PrxMetaUserButtonActionMethod()
                            {
                                foreMethod = "NewObject"
                            }
                        }
                    }
                },
            }
        }
    };
    // Изменение коллекции пользовательских кнопок
    var result = somClient.PrxMetaUserButtonsUpdate(tChange);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
