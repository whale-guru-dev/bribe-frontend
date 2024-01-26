import {useWeb3React} from "@web3-react/core";
import {useEffect} from "react";
import {useMemo, useState} from "react";
import {useQuery} from "react-query";
import {provider} from "utils";

export const useBlockNumber = () => {
  const {chainId} = useWeb3React();
  const [blockNumber, setBlockNumber] = useState(0);
  const {data} = useQuery(["blocknumber"], () =>
    provider(chainId).getBlockNumber(),
  );
  useMemo(() => {
    if (data) setBlockNumber(data);
  }, [JSON.stringify(data)]);
  useEffect(() => {
    function handleNewBlock(block) {
      setBlockNumber(block);
    }
    provider(chainId).addListener("block", handleNewBlock);
    return function () {
      provider(chainId).removeListener("block", handleNewBlock);
    };
  }, [chainId]);
  return blockNumber;
};
