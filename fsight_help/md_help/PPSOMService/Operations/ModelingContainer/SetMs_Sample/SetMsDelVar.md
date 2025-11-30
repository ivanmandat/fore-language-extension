# Удаление переменной

Удаление переменной
-


**


# Удаление переменной


Ниже приведен пример использования операции [SetMs](../SetMs.htm) для удаления переменной. В запросе
 передаются: экземпляр открытого контейнера моделирования, параметры выполнения
 операции, срез данных, соответствующий удаляемой переменной, и шаблон
 получения измененных данных. В результате выполнения операция возвращает
 изменённую модель.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>CEOHFIGABHNBFOAEACLDIHAAFIBLHLNEJJHHIHEGOIMCAOGA!M!S!CPOKJBJGABHNBFOAEFABNMBGBLLNHOPAEHKDKCJFDLLMFBFKJ</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>[![](../../../minus.gif)](../../../#)<item>
  <key>92146</key>[![](../../../minus.gif)](../../../#)<metaModel>
  <calculationChain>Remove</calculationChain>  </metaModel>
  </item>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<item>
  <k>92146</k>  <type>MetaModel</type>[![](../../../minus.gif)](../../../#)<metaModelMd>
[![](../../../minus.gif)](../../../#)<calculationChain>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <k>1</k>  <type>Variable</type>  </Item>
  </its>
  </calculationChain>
  </metaModelMd>
  </item>
  </meta>
  </tArg>
  </SetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>CEOHFIGABHNBFOAEACLDIHAAFIBLHLNEJJHHIHEGOIMCAOGA!M!S!CPOKJBJGABHNBFOAEFABNMBGBLLNHOPAEHKDKCJFDLLMFBFKJ</id>  </id>
  </SetMsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMs" :
  {
   "tMs" :
    {
     "id" : "CEOHFIGABHNBFOAEACLDIHAAFIBLHLNEJJHHIHEGOIMCAOGA!M!S!CPOKJBJGABHNBFOAEFABNMBGBLLNHOPAEHKDKCJFDLLMFBFKJ"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "item" :
        {
         "key" : "92146",
         "metaModel" :
          {
           "calculationChain" : "Remove"
          }
        }
      },
     "meta" :
      {
       "item" :
        {
         "k" : "92146",
         "type" : "MetaModel",
         "metaModelMd" :
          {
           "calculationChain" :
            {
             "its" :
              {
               "Item" :
                {
                 "k" : "1",
                 "type" : "Variable"
                }
              }
            }
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetMsResult" :
  {
   "id" :
    {
     "id" : "CEOHFIGABHNBFOAEACLDIHAAFIBLHLNEJJHHIHEGOIMCAOGA!M!S!CPOKJBJGABHNBFOAEFABNMBGBLLNHOPAEHKDKCJFDLLMFBFKJ"
    }
  }
}


public static MsId SetMsDelVar(MsId ms, ulong metaKey, ulong varKeyDel)
{
    var setMsOp = new SetMs();
    setMsOp.tMs = ms;
    setMsOp.tArg = new SetMsArg()
    {  // Задаем шаблон изменения данных
        pattern = new MsMdPattern()
        {
            item = new MsItemPattern()
            {
                key = metaKey,
                metaModel = new MsMetaModelPattern()
                {
                    calculationChain = ListOperation.Remove
                }
            }
        },
        // Задаем данные, которые необходимо изменить
        meta = new MsMd()
        {
            item = new MsItem()
            {
                k = metaKey,
                type = MsItemType.MetaModel,
                metaModelMd = new MsMetaModel()
                {
                    calculationChain = new MsCalculationChainEntries()
                    {
                        its = new MsCalculationChainEntry[]
                        {
                            new MsCalculationChainEntry()
                            {
                                k = varKeyDel,
                                type = MsCalculationChainType.Variable
                            }
                        }
                    }
                }
            }
        }
    }; // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Задаем параметры выполнения операции
    var result = somClient.SetMs(setMsOp);
    return result.id;
}


См. также:


[SetMs: Операция](../SetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
